const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    launches: [Launch]! # Returns an array of all launches
    launch(id: ID!): Launch # Returns a single launch
    me: User # Fetches the current user's data
  }
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  type Rocket {
    id: ID!
    name: String
    type: String
  }
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
  }
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }
  enum PatchSize {
    SMALL
    LARGE
  }
  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String
  }
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`

module.exports = typeDefs
