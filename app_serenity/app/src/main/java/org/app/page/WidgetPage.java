package org.app.page;

import com.google.common.collect.ImmutableMap;
import io.appium.java_client.AppiumBy;
import io.appium.java_client.PerformsTouchActions;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import org.openqa.selenium.Point;
import io.appium.java_client.TouchAction;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.interactions.PointerInput;
import org.openqa.selenium.interactions.Sequence;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.Arrays;
import java.util.Random;

public class WidgetPage extends BasePage {

    @AndroidFindBy(xpath = "//android.widget.ImageView[@content-desc='enter']")
    private WebElement widget;

    @AndroidFindBy(xpath = "//android.widget.ImageView")
    private WebElement closeButton;
    @AndroidFindBy(accessibility = "PERMITIR OBTENER UBICACIÓN")
    private WebElement btnPermitir;
    //android.widget.Button
    @AndroidFindBy(xpath ="    //android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]")
    private WebElement userEmailInput;


    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]")
    private WebElement password;

    @AndroidFindBy(xpath ="//android.widget.Button")
    private WebElement btnLogin;

    @AndroidFindBy(accessibility = "INICIAR SESIÓN")
    private WebElement btnInicioSesion;

    //@AndroidFindBy(accessibility ="Teatros\\nPestaña 3 de 5")
    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"Teatros\n" +
            "Pestaña 3 de 5\"]")
    private WebElement btnTeatros;

    @AndroidFindBy(xpath ="(//android.widget.ImageView[@content-desc=\"Lab v5 Floresta\n" +
            "6078.91 km\"])[1]")
    private WebElement btnTeatro;


    @AndroidFindBy(accessibility ="19:00 PM")
    private WebElement timeMovie;

    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"BOLETA PRO 2D\n" +
            "$ 6.400\n" +
            "0\"]/android.widget.Button[2]")
    private WebElement sillaBoletaPro2;

    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"PK TTCONFI\n" +
            "Package con ticket y confiteria\n" +
            "$ 3.200\n" +
            "0\"]/android.widget.Button[2]")
    private WebElement sillaPKTTCONFI;

    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"PK TTCON3\n" +
            "Package con3 tickets\n" +
            "$ 6.666\n" +
            "0\"]/android.widget.Button[2]")
    private WebElement sillaPKTTCON3;

    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"GENERAL 2D\n" +
            "Prueba Laboratorio 79__2D_desde_ho_sql.\n" +
            "$ 7.400\n" +
            "0\"]/android.widget.Button[2]")
    private WebElement sillaGENERAL2D;
    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\" combo mio app ip\n" +
            "$ 34.700\n" +
            "1 Crispeta de 230 gr, 1 Gaseosa de 798 ml. \n" +
            "0\"]/android.view.View")
    private WebElement btnCombo1;

    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\" combo tu y yo app ip\n" +
            "$ 47.900\n" +
            "1 Crispeta de 230 gr, 2 Gaseosa de 798 ml. \n" +
            "0\"]/android.view.View")
    private WebElement btnCombo2;

    @AndroidFindBy(accessibility ="CONTINUAR")
    private WebElement btnContinuar;



    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText[4]")
    private WebElement inputCity;


    @AndroidFindBy(xpath ="//android.view.View[@content-desc=\"BOGOTA D.C., BOGOTÁ\"]")
    private WebElement selectCity;

    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[2]")
    private WebElement check;

    @AndroidFindBy(accessibility ="PAGAR")
    private WebElement btnPagar;

    @AndroidFindBy(accessibility ="Tarjeta crédito/débito")
    private WebElement bntTipoTarjeta;




    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText[1]")
    private WebElement inputtitu;

    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText[2]")
    private WebElement inputNumeroTarjeta;

    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText[3]")
    private WebElement inputFechaVencimiento;

    @AndroidFindBy(xpath ="//android.widget.FrameLayout[@resource-id=\"android:id/content\"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.widget.EditText[4]")
    private WebElement inputCvv;

    @AndroidFindBy(accessibility ="FINALIZAR")
    private WebElement btnFinalizar;

    public WidgetPage(AndroidDriver driver) {
        super(driver);
    }

    public void closeWidget() {
        driver.navigate().back();

    }
    public  void clickBtnPermitir(){
          actionClick(btnPermitir);

    }
    public  void clickBtnlogin(){
          actionClick(btnLogin);
    }
    public  void inputUserEmail(String email){
        actionClick(userEmailInput);
        actionWrite (userEmailInput ,email);

    }
    public  void inputUserPassword(String pass){
        actionClick(password);
        actionWrite (password ,pass);


    }
    public  void clickBntIniciarSesion(){
        actionClick(btnInicioSesion);

    }
    public  void clickBntTeatros(){
        actionClick(btnTeatros,6);


    }
    public  void clickTeatro(){
        actionClick(btnTeatro,6);

    }
    public void scrollMovie()  {
        scrollToElement();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
    }
    public  void clickHoraPelicula(){
        actionClick(timeMovie,40);

    }
    public void selectChair(int tipoDeSillas,int cantidad) {
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(70));
        waitElement();
        for (int i = 0; i < cantidad ; i++) {
            switch (tipoDeSillas) {
                case 1 -> {
                    actionClick(sillaBoletaPro2, 7);
                }
                case 2 -> {
                    actionClick(sillaPKTTCONFI, 7);
                }
                case 3 -> {
                    actionClick(sillaPKTTCON3, 7);
                }
                default -> {
                    actionClick(sillaGENERAL2D, 7);
                }
            }

        }

    }

    public  void clickBtnContinuar(){
        actionClick(btnContinuar);

    }
    public void selectRandomChair(){
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
        Random random = new Random();
        int randomNumber = random.nextInt(14);
        int[] puestos = {302, 300, 273, 254, 252, 3, 4, 40, 11, 10, 15, 13, 206, 215};


        String randomChair = String.format("//android.widget.ScrollView/android.view.View[6]/android.view.View/android.view.View[%d]", puestos[randomNumber]);
       var silla=  driver.findElement(AppiumBy.xpath(randomChair));
        silla.click();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
    }
    public void selectsCombo(int combo,int cantidad){
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
        for (int i = 0; i < cantidad ; i++) {
            if (combo == 1) {
                actionClick(btnCombo1,7);
            } else if (combo == 2 ) {
                actionClick(btnCombo2,7);
            }

        }

    }

    public void clickCheck () {
        actionClick(check);
    }
    public  void inputCity(String city){
        actionClick(inputCity);
        actionWrite (inputCity ,city);
        actionClick(selectCity);

    }

    public void clickBtnPagar () {
        actionClick(inputCity);
    }

    public void selectCard () {
        actionClick(bntTipoTarjeta);
    }

    public  void inputTitular(String titu){
        actionClick(inputtitu);
        actionWrite (inputtitu ,titu);

    }
    public  void inputNumberCard(String numero){
        actionClick(inputNumeroTarjeta);
        actionWrite (inputNumeroTarjeta ,numero);

    }
    public  void inputFecha(String fecha){
        actionClick(inputFechaVencimiento);
        actionWrite (inputFechaVencimiento ,fecha);

    }
    public  void inputCvv(String cvv){
        actionClick(inputCvv);
        actionWrite (inputCvv ,cvv);

    }
    public void clickBtnFinalizar () {
        actionClick(btnFinalizar);
    }

    private void actionClick(WebElement element)  {
//        Thread.sleep(20000);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
        element.click();
        //Thread.sleep(20000);
       driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
    }
    private void actionClick(WebElement element ,int segundo){

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(segundo));
        element.click();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(segundo));
    }
    private void actionWrite(WebElement element , String msg){

        try {
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
            element.clear();
            element.sendKeys(msg);
            driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20));
        } catch (Exception e) {
            System.out.println("No se pudo escribir el texto: " + e.getMessage());

        }
    }
    private void scrollToElement() {
        //driver.findElement(AppiumBy.androidUIAutomator("new UiScrollable(new UiSelector()).scrollIntoView(text(\"+element+"\"));"));
        //driver.findElement(AppiumBy.androidUIAutomator("new UiScrollable(new UiSelector()).scrollIntoView(class(\""+element+"\"));"));

        //"new UiScrollable(new UiSelector()).scrollIntoView(text(\"Elvis '168 Comeback Special Subtitulada\"));"
        final var finger = new PointerInput(PointerInput.Kind.TOUCH, "finger");
        var start = new Point(1001, 1570);
        var end = new Point (995, 400);
        var swipe = new Sequence(finger, 1);
        swipe.addAction(finger.createPointerMove(Duration.ofMillis(0),
                PointerInput.Origin.viewport(), start.getX(), start.getY()));
        swipe.addAction(finger.createPointerDown(PointerInput.MouseButton.LEFT.asArg()));
        swipe.addAction(finger.createPointerMove(Duration.ofMillis(1000),
                PointerInput.Origin.viewport(), end.getX(), end.getY()));
        swipe.addAction(finger.createPointerUp(PointerInput.MouseButton.LEFT.asArg()));
        driver.perform(Arrays.asList(swipe));


}

    private void waitElement(){
        WebDriverWait wait =new WebDriverWait(driver,Duration.ofSeconds(10));
        wait.until(ExpectedConditions.attributeContains(driver.findElement(By.xpath("//android.view.View[@content-desc=\"BOLETA PRO 2D\n" +
                "$ 6.400\n" +
                "0\"]/android.widget.Button[2]")),"class" , "android.widget.Button"));
    }
    private void swipeAction(WebElement ele,String direction)
    {
        ((JavascriptExecutor) driver).executeScript("mobile: swipeGesture", ImmutableMap.of(
                "elementId", ((RemoteWebElement)ele).getId(),

                "direction", direction,
                "percent", 0.75
        ));


    }


    private void tapCloseArea() {

        int xCoordinate =1502;
        int yCoordinate =234;

        TouchAction<?> touch = new TouchAction<>((PerformsTouchActions) driver);
        touch.tap(PointOption.point(xCoordinate, yCoordinate)).perform();
    }

}