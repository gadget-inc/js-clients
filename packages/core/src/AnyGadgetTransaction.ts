export interface AnyGadgetTransaction {
  open: boolean;
  close(): void;
  rollback(): Promise<void>;
}

export type TransactionRun<T extends AnyGadgetTransaction> = (transaction: T) => Promise<T>;
