# Dungeons and Dragons App

## Aims
The aims of this application are as follows:
  1. Build out a solid api
  1. Explore the use of transactions within the API
  1. Build a note taking app for your TTRPG of choice that supports multiple campaigns, users, and sessions (the app is overall built with dungeons and dragons in mind).
  1. Build a character creator for D&D 5e
  1. Build a spell list creator for D&D 5e
  1. Explore testing suites and Test Driven Development

## File Structure
- Root
  - server :: Server Logic
    - config :: Configuration Files
      - server.js :: Server Configuration
      - mongoose.js :: Mongoose Connection Configuration
    - models :: Models
      - campaign.js :: Campaign Model configuration
      - campaignSession.js :: Campaigh Sesison Configuration
      - index.js :: holds all models and exports them
    - routes :: Route Logic
      - api :: API Routes configuration
        - campaignRoutes.js :: defines routes for /api/campaign/
        - index.js :: router set up for api routes
        - sessionRoutes.js :: defines routes for /api/session/
      - index.js :: defines router usage
    - utils :: utility functions
      - asyncErrorHandler.js :: custom async error handler
      - expressError.js :: custom error object
    -index.js :: starts the application
  - .env :: holds environtment variables: currently PORT and MONGODB_
  URI
  - .eslintrc.js :: es lint configuration
  - LICENSE :: LICENSE
  - package-lock.json :: Package Lock File
  - package.json :: Package Scripts, dependencies, etc.
  - README.md :: README

