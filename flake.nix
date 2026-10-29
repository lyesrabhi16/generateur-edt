{
  description = "Générateur EDT dev environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAll = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in {
      devShells = forAll (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [ nodejs_22 postgresql ];
          shellHook = ''
            echo "Node $(node --version) | $(psql --version)"
            echo "Setup: see README.md (database, backend/.env, npm run backend / frontend)"
          '';
        };
      });
    };
}
