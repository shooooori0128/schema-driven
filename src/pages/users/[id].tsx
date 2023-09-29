import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { UserDTO } from "~/types/openapi/schemas";
import { Card, CardContent, Typography, CardActions, Button, Grid, Avatar } from "@mui/material";

export default function UserById() {
  const router = useRouter();
  const { id: userId } = router.query;

  const [user, setUser] = useState<UserDTO | undefined>(undefined)

  useEffect(() => {
    if (!userId) return;

    (async () => {
      // HACK: ServiceWorkerがブラウザに登録される前にuseEffectの中身が実行されてしまうため1秒遅延。
      // axiosのinterceptor等を利用して、モック動作時はリクエストを遅延してやるようにすると良い。
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await axios.get(`http://localhost:3000/users/${userId}`)

      if (response) {
        setUser(response.data)
      }
    })();
  }, [userId])
  
  return (
    <Grid container>
      <Grid>
        { user && (
          <Card component={"div"} sx={{ minWidth: 275 }}>
            <CardContent>
              <Avatar>{ user.name.slice(0, 1) }</Avatar>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                { user.role }
              </Typography>
              <Typography variant="h5" component="div">
                { user.name }
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                { user.email }
              </Typography>
              <Typography variant="body2">
                { user.address }
                <br />
                { user.tel }
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">details</Button>
            </CardActions>
          </Card>
        ) }
      </Grid>
    </Grid>
  )
}

