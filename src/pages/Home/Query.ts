import { gql } from "@apollo/client";

const GET_USERLIST = gql`
  query GetCharacters($page: Int, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      results {
        id
        name
        image
      }
    }
  }
`;

const HomeQuery = {
  userList: GET_USERLIST,
};

export default HomeQuery;
