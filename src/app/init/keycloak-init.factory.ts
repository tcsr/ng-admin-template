import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'dev',
        clientId: 'angular',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 60,
      },
      loadUserProfileAtStartUp: true,
    });
}
