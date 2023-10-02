import React from "react";
//@ts-ignore
import CSS from "./Table.module.css";
export interface TableProps extends React.HTMLProps<HTMLTableElement> {
  containerClassName: String;
}

export default function Table(props: TableProps) {
  const { containerClassName, className, ...other } = props;
  return (
    <div
      className={`${CSS.table_container}${
        containerClassName ? ` ${containerClassName}` : ""
      }`}
    >
      <table
        {...other}
        className={`${CSS.table}${className ? ` ${className}` : ""}`}
      >
        {props.children}
      </table>
    </div>
  );
}

export function Th(props: React.HTMLAttributes<HTMLTableCellElement>) {
  const { className, ...other } = props;
  return (
    <th
      scope="col"
      {...other}
      className={`${CSS.table_h_col}${className ? ` ${className}` : ""}`}
    >
      {props.children}
    </th>
  );
}

export function Tr(props: React.HTMLAttributes<HTMLTableRowElement>) {
  const { className, ...other } = props;
  return (
    <tr
      {...other}
      className={`${CSS.table_row}${className ? ` ${className}` : ""}`}
    >
      {props.children}
    </tr>
  );
}

export function LeadTd(props: React.HTMLAttributes<HTMLTableCellElement>) {
  const { className, ...other } = props;
  return (
    <td
      {...other}
      className={`${CSS.table_r_scope}${className ? ` ${className}` : ""}`}
    >
      {props.children}
    </td>
  );
}

export function Td(props: React.HTMLAttributes<HTMLTableCellElement>) {
  const { className, ...other } = props;
  return (
    <td
      {...other}
      className={`${CSS.table_r_col}${className ? ` ${className}` : ""}`}
    >
      {props.children}
    </td>
  );
}
