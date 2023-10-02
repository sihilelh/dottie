import React from "react";

export default function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return <button>{props.children}</button>;
}
