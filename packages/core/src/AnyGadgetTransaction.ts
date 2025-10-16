export interface AnyGadgetTransaction {
  open: boolean;
  close(): void;
  rollback(): Promise<void>;
}

export type TransactionRun<ResultT, T extends AnyGadgetTransaction = AnyGadgetTransaction> = (transaction: T) => Promise<ResultT>;
