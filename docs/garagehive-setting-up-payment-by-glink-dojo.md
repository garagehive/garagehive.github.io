---
layout: docs
title: Setting Up Payment by Garage Link for Dojo in Garage Hive
---

<a name="top"></a>

## In this article
1. [Setting Up Payment by Garage Link for Dojo in Garage Hive](#setting-up-payment-by-garage-link-for-dojo-in-garage-hive)
2. [Testing the garage link setup](#testing-the-garage-link-setup)


### Setting Up Payment by Garage Link for Dojo in Garage Hive
Garage Link for Dojo is a payment gateway that is used for online payments. To setup payment by **Garage Link**:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Gateways**, and select the related link.
1. Select **New** from the **Payment Gateways** page to add a new payment method.

   ![](media/garagehive-payment-gateways1.gif)

1. In the **General** FastTab of the **Payment Gateway Card**, enter the payment method code; in this case, we'll add **PAYBYGLINK**. 
1. Select **eCommerce (Paymentsense)** in the **Payment System** field, and in the **eCommerce (Connect-E)** FastTab, select **v2** in the **API Version** field.
   
   ![](media/garagehive-payment-gateways2.gif)

1. Open the email with the subject **Set Up Online Checkout** that was sent to you as a **Dojo** customer, and then **Login** to your account. 

   ![](media/garagehive-payment-gateways3.png)

   ![](media/garagehive-payment-gateways4.png)

1. Select **Account** on the left-hand side of your account, followed by **Locations**. If you only have one location, select it in the main window; if you have multiple locations, scroll through them and select the location where you want to add the payment method. The location information will appear on the right-hand side.

   ![](media/garagehive-payment-gateways5.png)

1. Scroll down to **Remote Payments** in the **Location Details** section and click on the **Website** field.

   ![](media/garagehive-payment-gateways6.png)

1. Copy the **Website Address** from the page that appears and paste it into the **Merchant URL** in the Garage Hive’s **Payment Gateway Card**.
1.  Then, copy the **JWT Token** and paste it in the **Gateway JWT Token** field of the Garage Hive’s **Payment Gateway Card**.

     ![](media/garagehive-payment-gateways7.png)

     ![](media/garagehive-payment-gateways8.png)

1. Choose **SMS and Email** as the **Default Notification Type** and **Manual** as the **Notification Source Code** from the **Payment Gateway Card**.
1. You can add internal user email address(es) in the **Payment Notification Emails** that the system will use to notify the user(s) when the customer makes a payment.
1. Add the company's terms and conditions for the online payments in the **Terms and Conditions** field; Privacy and Refund policies must be included.

   ![](media/garagehive-payment-gateways9.png)

1. To enable the payment method, select the **Enabled** slider. 

   ![](media/garagehive-payment-gateways10.png)

1. You can preview the payment link by selecting **Open Preview Link** from the menu bar, in the **Payment Gateway Card**.

   ![](media/garagehive-payment-gateways11.gif)

1. Click the **Back** arrow to exit the **Payment Gateway Card** and save your changes. Your new payment method is now active.


[Go back to top](#top)

### Testing the Garage Link setup
Once configured, it is recommended that you run a **£0.01** transaction as a test. Create a new Jobsheet with your personal information, add a  or **consumable or a non-inventory item**, and then proceed to the **Take Payment** screen.

   ![](media/paybygaragelink-takepayment1.png)

Once on the **Take Payment** screen, enter the amount in the **Pay By Garage Link** line, and select **Pay By Garage Link** from the menu bar.

   ![](media/paybygaragelink-takepayment.png)

Make sure the **Payment Amount** value is set to **£0.01**, select the notification type and enter your details. Once you receive the test SMS/Email please follow the link and complete the test payment. 

{% include tip.html title="Note" text="Normally, when requesting payment via the Pay by GarageLink, the details automatically picked to send the request are the Bill-to Customer details." %}


![](media/paybygaragelink-paymentwindow.jpg)

You can check the status of the payment in **Garage Hive** by selecting the **Payment Gateway Entries** from the action bar. 

![](media/paybygaragelink-gateway-entries.jpg)

You should also receive an email confirming the payment has been received. Once you've received payment for this job, post it with the penny on it.

[Go back to top](#top)

<br>

### See Also

[Taking a Payment and Posting a Jobsheet](garagehive-jobsheet-taking-payment.html){:target="_blank"} \
[Setting Up Payment by Garage Link for Access PaySuite](garagehive-payment-gateways.html){:target="_blank"} \
[How to Use Humm Financing](garagehive-humm-financing.html){:target="_blank"} \
[Setting Up Payment by Card Terminal](garagehive-setting-up-payment-by-card-terminal.html){:target="_blank"} \
[How to Set Card Terminals Into Integration Mode](garagehive-setting-card-terminals-into-integration-mode.html){:target="_blank"} \
[Generating Paymentsense Card Machine End of Day, X Balance and Z Balance Report](garagehive-paymentsense-card-machine-x-and-z-report.html){:target="_blank"}
 