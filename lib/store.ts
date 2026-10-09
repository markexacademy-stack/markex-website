import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { CrmStore } from "@/lib/crm-types";

const directory = path.join(process.cwd(), "data", "store");
const file = path.join(directory, "crm.json");

const empty: CrmStore = { leads: [], payments: [], students: [], receipts: [] };

let queue: Promise<unknown> = Promise.resolve();

async function readStore(): Promise<CrmStore> {
  try {
    const raw = await readFile(file, "utf8");
    const parsed = JSON.parse(raw) as CrmStore;
    return {
      leads: parsed.leads ?? [],
      payments: parsed.payments ?? [],
      students: parsed.students ?? [],
      receipts: parsed.receipts ?? [],
    };
  } catch {
    return { ...empty, leads: [], payments: [], students: [], receipts: [] };
  }
}

async function writeStore(store: CrmStore) {
  await mkdir(directory, { recursive: true });
  await writeFile(file, JSON.stringify(store, null, 2), "utf8");
}

export function updateStore<T>(mutator: (store: CrmStore) => Promise<T> | T) {
  const run = queue.then(async () => {
    const store = await readStore();
    const result = await mutator(store);
    await writeStore(store);
    return result;
  });
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}
