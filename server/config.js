// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "google"
});
ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "95968715641-cu2cvf8kbjvnidjmma2tm8pao3qn5873.apps.googleusercontent.com",
  secret: "TsiNiJvlx96QdtghODfr_K0t"
});

ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1501255440126645",
  secret: "0ca8554aa3907af727ee95b0f0b6686d"
});