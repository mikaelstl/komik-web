/// <reference lib="webworker" />

import { Archive } from "libarchive.js";
import { extractPages } from "../utils/extractPages";
import { ExtractionResult, fetchCover } from "../utils/extractCover";

export type WorkerResponse = {
  buffer: ArrayBuffer | null,
  type: string | undefined
}

type WorkerTypeActions = 'cover' | 'pages';

type WorkerAction = {
  [action: string]: (file: File) => Promise<ExtractionResult | null>
}

export type WorkerListnerData = {
  action: WorkerTypeActions,
  payload: File
}

let initialized = false;

async function initArchive() {
  if (!initialized) {
    const workerUrl = new URL(
      'assets/libarchive/worker-bundle.js',
      import.meta.url
    ).toString();

    // console.log('Worker URL:', workerUrl);

    await Archive.init({
      workerUrl: workerUrl
    })
    initialized = true;
  }
}

addEventListener('message', async ({ data }) => {
  const actions: WorkerAction = {
    cover: fetchCover,
    // pages: extractPages
  }

  await initArchive();

  const { action, payload } = data;

  try {
    const method = actions[action];

    const result: ExtractionResult | null = await method(payload);

    if (result) {
      postMessage({buffer: result.buffer, type: result.type }, [result.buffer])
    } else {
      postMessage({ buffer: null, type: null });
    }
  } catch (err) {
    console.log(err);

    postMessage('AN ERROR ACCOURS WITH WebWorker: ' + err);
  }
});