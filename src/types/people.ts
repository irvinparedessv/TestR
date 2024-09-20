export interface Person {
  Name: string;
  "Favorite Movie": string;
  "Favorite Food": string;
  Status: Status;
  ExecutionDate?: string;
}

type Status = "Active" | "Inactive";
