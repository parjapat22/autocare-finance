import { createContext } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--color-neutral-400);

  & tr:nth-child(even) {
    background-color: var(--color-neutral-200);
  }

  & tr:hover {
    background-color: var(--color-indigo-100);
  }
`;

const StyledHeader = styled.thead`
  font-size: inherit;
`;

const StyledBody = styled.tbody`
  font-size: inherit;
`;

const StyledRow = styled.tr`
  font-size: inherit;
`;

const StyledTh = styled.th`
  background-color: var(--color-neutral-300);
  padding: 0.5rem;
  text-align: center;
`;

const StyledTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

const Empty = styled.tbody`
  font-size: inherit;
`;

// 1. create a context
const TableContext = createContext();

// 2. create parent component
function Table({ children, role }) {
  return (
    <TableContext.Provider value={role}>
      {<StyledTable role={role}>{children}</StyledTable>}
    </TableContext.Provider>
  );
}

// 3. create child components to implement the common task using useContext
function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <Empty>
        <tr>
          <td>No data to display</td>
        </tr>
      </Empty>
    );

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }) {
  return <StyledRow role="row">{children}</StyledRow>;
}

function Th({ children }) {
  return <StyledTh>{children}</StyledTh>;
}

function Td({ children }) {
  return <StyledTd>{children}</StyledTd>;
}

// 4. add child components as properties to parent component
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Th = Th;
Table.Td = Td;

export default Table;
