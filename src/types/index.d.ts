export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | JSX.Element[];

export interface LV {
  label: string | number;
  value: string | number;
}

export interface APIError {
  response: {
    data: {
      message: string;
    };
    status: number;
  };
}

export type THPositions = "left" | "right";

export type TVPositions = "top" | "bottom";

export type TPositions = THPositions | TVPositions;

export * from "./invoices";
export * from "./user";
export * from "./preferences";
