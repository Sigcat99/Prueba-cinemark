package org.app.utils;

// AppiumServer.java
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;

public class AppiumServer {
    private static AppiumDriverLocalService service;

    public static void start() {
        service = new AppiumServiceBuilder().usingAnyFreePort().build();
        service.start();
    }

    public static void stop() {
        if (service != null) {
            service.stop();
        }
    }

    public static String getUrl() {
        return service.getUrl().toString();
    }
}
