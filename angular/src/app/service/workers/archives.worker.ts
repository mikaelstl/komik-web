/// <reference lib="webworker" />

import { Archive } from "libarchive.js";
import { extractComicCover } from "../utils/extractComicCover";
import { extractPages } from "../utils/extractPages";

type WorkerTypeActions = 'cover' | 'pages';

type WorkerAction = {
  [action: string]: (file: File) => void// Promise<ArrayBuffer | null>
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

    console.log('Worker URL:', workerUrl);

    await Archive.init({
      workerUrl: workerUrl
    })
    initialized = true;
  }
}

addEventListener('message', async ({ data }) => {
  const actions: WorkerAction = {
    cover: extractComicCover,
    // pages: extractPages
  }

  await initArchive();

  console.log('Archive iniciado');

  const { action, payload } = data;

  try {
    console.log('Try/Catch iniciado');

    const method = actions[action];

    const result = await method(payload);
    console.log('Extração iniciada');
    postMessage('ok'/* {action, result}, [result as ArrayBuffer] */)
  } catch (err) {
    console.log(err);

    postMessage('AN ERROR ACCOURS WITH WebWorker: ' + err);
  }
});