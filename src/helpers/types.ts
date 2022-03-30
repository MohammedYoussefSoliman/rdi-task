import React from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export interface RouterType {
  element: React.ComponentType<any>;
  path: string;
}
