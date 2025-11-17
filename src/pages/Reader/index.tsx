import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { Title } from "../../components/base/Title";
import { ComicInfos } from "../../components/ComicInfos";
import { Screen } from "../../components/Screen";
import { Actions, ChangePage, Container, Infos, Main } from "./style";
import { NextBtn } from "../../components/buttons/NextBtn";
import { PrevBtn } from "../../components/buttons/PrevBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import { database } from "../../service/db/db";
import { useEffect, useState } from "react";
import { extractPages } from "../../service/utils/extractPages";
import { ReaderView } from "./ReaderView";
import { formatNumber } from "../../service/utils/formatNumber";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import type { ReadingComic } from "../../service/models/Reading";
import { useChangePage } from "../../hooks/useChangePage";

export function Reader() {
  const navigate = useNavigate();

  const { comickey } = useParams();
  const ckey = decodeURIComponent(comickey ?? '');

  const comic = useLiveQuery(() => database.comics.where('key').equals(ckey).first());
  const readingComic = useLiveQuery(() => database.reading.where('comicKey').equals(ckey).first())

  const [pages, setPages] = useState<Blob[]>([]);
  const [actualPage, setActualPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const onCloseReader = async () => {
    navigate('..');

    if (readingComic) {
      await database.reading.update(readingComic.id, { actualPage: actualPage })
    } else {
      const reading: ReadingComic = {
        comicId: comic?.id ?? NaN,
        comicKey: comic?.key ?? '',
        actualPage: actualPage
      }

      await database.reading.add(reading);
    }
  }

  const toNextPage = () => {
    if (actualPage < pages.length - 1) {
      setActualPage(actualPage + 1);
    }
  }

  const toPreviousPage = () => {
    if (actualPage > 0) {
      setActualPage(actualPage - 1);
    }
  }

  useChangePage(
    () => toPreviousPage(),
    () => toNextPage()
  );

  const fetchPages = async () => {
    try {
      const file = await database.files.where('comicKey').equals(comic?.key ?? '').first();

      if (file) {
        const p = await extractPages(file.blob);
        setPages(p);
        setLoading(false);
      }
    } catch (error) {
      alert('ERROR: ' + error);
    }
  }

  useEffect(() => {
    setLoading(true);
    if (!comic) return;

    if (readingComic) {
      setActualPage(readingComic.actualPage)
    };

    fetchPages();

    return () => {
      onCloseReader();
    } 
  }, [comic]);

  const Content = () => {
    return (
      <>
        <Container>
          <Infos>
            <button onClick={onCloseReader}>
              <ChevronLeftIcon width={32} />
            </button>
            <ComicInfos
              title={comic?.title ?? "Not named"}
              subtitle={comic?.subtitle ?? ''}
              edition={comic?.edition ?? "00"}
            />
          </Infos>
          <Actions>
            <Title>{formatNumber(actualPage + 1)}</Title>
            <ChangePage>
              <PrevBtn onClick={toPreviousPage} />
              <NextBtn onClick={toNextPage} />
            </ChangePage>
          </Actions>
        </Container>
        <ReaderView
          image={pages[actualPage] ?? undefined}
        />
      </>
    )
  }

  return (
    <Screen>
      <Main>
        {
          loading
            ? <div className="circular-progress-div"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                width: '100%',
                height: '100%'
              }}
            >
              <LoadingSpinner />
            </div>
            : <Content />
        }
      </Main>
    </Screen>
  )
}