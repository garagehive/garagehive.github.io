---
layout: docs
title: Setting Up Payment by Garage Link for Stripe in Garage Hive
---

<a name="top"></a>

# Setting Up Payment by Garage Link for Stripe in Garage Hive

## In this article
1. [Setting Up Payment with Stripe](#setting-up-payment-with-stripe)
2. [Create Stripe Payment Method for Locations](#create-stripe-payment-method-for-locations)
3. [Take Payment using Stripe Payment Method](#take-payment-using-stripe-payment-method)

### Setting Up Payment with Stripe
Garage Link for Stripe is a payment gateway used for online transactions powered by **Stripe**. Before setting it up in the Garage Hive system, make sure you've created a Stripe account at [stripe.com](https://dashboard.stripe.com/register). To set up Garage Link for Stripe in Garage Hive:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Gateways**, and choose the related link.

   ![](media/garagehive-stripe-payment1.png)

2. On the **Payment Gateways** page, click to open and edit the **PAYBYGLINK** payment gateway.

   ![](media/garagehive-stripe-payment2.png)

3. In the **Payment Gateway Card**, set the **Payment System** to **eCommerce (Stripe)**.
4. In the **eCommerce (Stripe)** section, specify how many hours the payment link should be valid for in **Payment Link Valid Hours**. Choose the **Default Notification Type**, set the Notification **Source Code** to **PAYBYGLINK**, and enter your **Terms and Conditions** in the provided field.

   ![](media/garagehive-stripe-payment3.png)

5. To get your **Stripe Account ID**, click on **Actions** from the menu bar and choose **Connect Your Stripe Account**. 

   ![](media/garagehive-stripe-payment4.png)

6. You will be redirected to the **Stripe** dashboard. Follow the instructions until your **Account ID** is displayed. Copy it and return to Garage Hive.

   ![](media/garagehive-stripe-payment5.png)

7. Paste the **Account ID** in the **Stripe Account ID** field, and click on the **Enabled** slider to enable the payment method in your system.

   ![](media/garagehive-stripe-payment6.png)


[Go back to top](#top)

### Create Stripe Payment Method for Locations
1. Once you have set up your **Stripe** payment method, you need to make sure that the Location Payment Method is linked to the right payment gateway. To do this, search for **Location Payment Methods** by clicking on the search ![](media/search_icon.png)  icon located at the top right corner of the screen.

   ![](media/garagehive-stripe-location-payment1.png)

2. Choose the location you want by selecting the corresponding code in the **Location Code** column. In the **Payment Method Code** column, select **INGLINK** as the payment method. 
3. Finally, select the Stripe payment gateway you have set up by choosing the corresponding code in the **Payment Gateway Code** column.

   ![](media/garagehive-stripe-location-payment2.png)


[Go back to top](#top)

### Take Payment using Stripe Payment Method
To take payment using **Stripe** from a document:
1. Select **Payments/Posting** from the menu bar, and choose **Take Payment**.

   ![](media/garagehive-stripe-take-payment1.png)

2. In the **Document Payments** page, click on **Pay By Garage Link** in the menu bar.

   ![](media/garagehive-stripe-take-payment2.png)


3. Enter the **Payment Amount** (the default is the total document amount), choose the **Notification Type**, and provide the **Email or Mobile Phone No.** for the notification. Click **OK**.

   ![](media/garagehive-stripe-take-payment4.png)

4. The customer will receive a **Payment Request** message with a link for the payment.

   ![](media/garagehive-stripe-take-payment5.png)

5. When the customer clicks the link, they will be taken to a payment page where they can enter their card details and complete the payment.

   ![](media/garagehive-stripe-take-payment6.png)

6. The payment will now be updated in the **Payment Gateway Amount** for Stripe. Enter the amount paid in the **Amount** column, and close the **Document Payments** page.

   ![](media/garagehive-stripe-take-payment7.png)


[Go back to top](#top)