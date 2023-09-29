import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import axios from "axios";

import { UserDTO } from "~/types/openapi/schemas";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

export const getServerSideProps: GetServerSideProps<{ users: UserDTO[] }> = async () => {
  const response = await axios.get('http://localhost:3000/users');

  return {
    props: {
      users: response.data?.users
    }
  };
};

export default function Users({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <TableContainer component={Paper} sx={{ p: 8 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>氏名</TableCell>
            <TableCell>メールアドレス</TableCell>
            <TableCell>住所</TableCell>
            <TableCell>電話番号</TableCell>
            <TableCell>権限</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.tel}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

