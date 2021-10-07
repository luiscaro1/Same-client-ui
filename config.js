const config =
  process.env.NODE_ENV === "production"
    ? {}
    : {
        auth_api: {
          base_url: "http://localhost:5000",
          login_route: "/Same/login",
        },
        game_api: {
          base_url: "http://localhost:5004",
          get_all_games_route: "/game/all",
          get_game_by_id_route: "/game/",
        },
      };

export default config;
