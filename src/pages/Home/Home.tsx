import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import HomeQuery from "./Query";
import UserCard from "./UserCard";
import { Box, Button, Grid, LinearProgress, TextField } from "@mui/material";

interface UsersData {
  characters: {
    results: {
      id: string;
      name: string;
      image: string;
    }[];
  };
}

interface UsersVars {
  page?: number;
  filter?: string;
}

const PAGE_SIZE = 20;

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("");
  const { loading, error, data, refetch } = useQuery<UsersData, UsersVars>(
    HomeQuery.userList,
    {
      variables: { page, filter },
    }
  );

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPage(1);
    setFilter(event.target.filter.value);
  };

  const removedFilter = () => {
    setPage(1);
    refetch({ page: 1, filter: "" });
  };

  if (loading && !data) return <LinearProgress color="success" />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ display: "flex", p: 2, gap: 2, bgcolor: "#020e29" }}
      >
        <form
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            backgroundColor: "#17f0a0",
            borderRadius: 4,
            padding: 6,
          }}
          onSubmit={handleFilterChange}
        >
          <TextField
            defaultValue={filter}
            id="filled-basic"
            label="search"
            color="success"
            name="filter"
            size="small"
          />
          <Button type="submit" variant="contained" color="success">
            Search
          </Button>
          <Button
            type="button"
            variant="contained"
            color="success"
            onClick={removedFilter}
          >
            remove filtrer
          </Button>
        </form>

        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 2 }}>
          <Grid container justifyContent="center" gap={4} spacing={2}>
            {data?.characters?.results.map(
              (user: { id: string; name: string; image: string }) => (
                <Grid
                  xs={12}
                  sm={6}
                  md={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  minHeight={180}
                >
                  <UserCard cardData={user} key={user.id} />
                </Grid>
              )
            )}
          </Grid>
        </Box>
        <Button
          type="button"
          variant="contained"
          color="success"
          disabled={page === 1}
          onClick={handlePrevClick}
        >
          Previous
        </Button>
        <Button
          type="button"
          variant="contained"
          color="success"
          disabled={data?.characters?.results.length !== PAGE_SIZE}
          onClick={handleNextClick}
        >
          
          Next 
        </Button>
      </Grid>
    </>
  );
};
export default Home;
