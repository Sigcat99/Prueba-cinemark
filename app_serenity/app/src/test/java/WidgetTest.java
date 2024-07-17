
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import io.qameta.allure.Description;
import io.qameta.allure.Severity;
import io.qameta.allure.SeverityLevel;
import org.app.page.WidgetPage;
import org.app.utils.AppiumServer;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.URL;
import java.time.Duration;

public class WidgetTest {
    private AppiumDriver driver;
    private WidgetPage widgetPage;
    private AndroidDriver drivers;
    @Before
    public void setUp() throws Exception {
        UiAutomator2Options options = new UiAutomator2Options()
                .setAutomationName("uiautomator2")
                .setPlatformName("Android")
                .setPlatformVersion("15.0")
                .setDeviceName("pixel Fold")
                .setApp("C:\\Users\\stive\\robot\\app_serenity\\app\\src\\main\\resources\\2833.apk")
                .setAutoGrantPermissions(true);

        URL url = new URL("http://localhost:4723/wd/hub");
        drivers = new AndroidDriver(url, options);
        drivers.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
        widgetPage = new WidgetPage(drivers);
    }
    @Test
    @Description("Prueba Gneracion QR")
    @Severity(SeverityLevel.NORMAL)
    public void testCloseWidget() {

        widgetPage.clickBtnPermitir();
        widgetPage.closeWidget();
        widgetPage.clickBtnlogin();
        widgetPage.inputUserEmail("automationtestbc@yopmail.com");
        widgetPage.inputUserPassword("Colombia2024#");
        widgetPage.clickBntIniciarSesion();
        widgetPage.clickBntTeatros();
        widgetPage.clickTeatro();
        widgetPage.scrollMovie();
        widgetPage.clickHoraPelicula();
        widgetPage.selectChair(1,1);
        widgetPage.clickBtnContinuar();
        widgetPage.selectRandomChair();
       widgetPage.clickBtnContinuar();
        widgetPage.selectsCombo(1,1);
        widgetPage.clickBtnContinuar();
        widgetPage.clickBtnContinuar();

        widgetPage.clickCheck();
        widgetPage.inputCity("BOGOTA D.C., BOGOTÁ");
        widgetPage.clickBtnPagar();

        widgetPage.selectCard();
        widgetPage.inputTitular("Sundevs QA");
        widgetPage.inputNumberCard("4093551018099251");
        widgetPage.inputCvv("777");//777
        widgetPage.inputFecha("08/25");
        widgetPage.clickBtnFinalizar();

        // Añade aserciones aquí
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
        AppiumServer.stop();
    }
}

