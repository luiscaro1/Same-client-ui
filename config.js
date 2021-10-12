const config =
  process.env.NODE_ENV === "production"
    ? {}
    : {
        auth_api: {
          base_url: "http://localhost:5000",
          login_route: "/Same/login",
          signup_route: "/Same/accounts",
          verify_auth: "/Same/accounts/getCookieOwner",
        },
        game_api: {
          base_url: "http://localhost:5004",
          get_all_games_route: "/game/all",
          get_game_by_id_route: "/game/",
          get_lfg_lobbies: "/lfg/",
          create_lfg_lobby: "/lfg/create",
        },
      };

export default config;
