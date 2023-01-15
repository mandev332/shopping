import { ApiKeyManager } from "@esri/arcgis-rest-request";
import { geocode } from "@esri/arcgis-rest-geocoding";
const apiKey =
  "AAPK0ad64edc72df423e995ba3b93f64d240o8VYz6z0I-7i6TwJ6nop8ZYfk_4tdEbqOgMhmrE6z3D_3_aGrLR1uXaQrNYfzGh5";
const authentication = ApiKeyManager.fromKey(apiKey);
geocode({
  address: "Чиланзар-5, Ташкент, Узбекистан",
  countryCode: "+998",
  authentication,
}).then((res) => {
  console.log(res.candidates);
});
