---
layout: docs
title: DRAFT* - Setting Up Payment by Garage Link for Stripe in Garage Hive
---

<a name="top"></a>

# We are still working on this article!
We are currently reviewing this article before it is published, check back later.

# Setting Up Payment by Garage Link for Stripe in Garage Hive

## In this article
1. [Setting Up Payment with Stripe](#setting-up-payment-with-stripe)
2. [Create Stripe Payment Method for Locations](#create-stripe-payment-method-for-locations)
3. [Take Payment using Stripe Payment Method](#take-payment-using-stripe-payment-method)

### Setting Up Payment with Stripe
Garage Link for Stripe is a payment gateway used for online transactions powered by **Stripe**. Before setting it up in the Garage Hive system, make sure you've created a Stripe account at [stripe.com](https://dashboard.stripe.com/register). To set up Garage Link for Stripe in Garage Hive:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Gateways**, and choose the related link.

   ![](media/garagehive-stripe-payment1.png)

2. On the **Payment Gateways** page, click **New** to add a new payment method.

   ![](media/garagehive-stripe-payment2.png)

3. In the **Payment Gateway Card**, enter Stripe as the **Code**, and set the **Payment System to eCommerce (Stripe)**.
4. In the **eCommerce (Stripe)** section, specify how many hours the payment link should be valid for in **Payment Link Valid Hours**. Choose the **Default Notification Type**, set the Notification S**ource Code** to **PAYREQUEST**, and enter your **Terms and Conditions** in the provided field.

   ![](media/garagehive-stripe-payment3.png)

5. To get your **Stripe Account ID**, click on **Actions** from the menu bar and choose **Connect Your Stripe Account**. 

   ![](media/garagehive-stripe-payment4.png)

6. You will be redirected to the **Stripe** dashboard. Follow the instructions until your **Account ID** is displayed. Copy it and return to Garage Hive.

   ![](media/garagehive-stripe-payment5.png)

7. Paste the **Account ID** in the **Stripe Account ID** field, and click on the **Enabled** slider to enable the payment method in your system.

   ![](media/garagehive-stripe-payment6.png)


[Go back to top](#top)

### Create Stripe Payment Method for Locations
To create the Stripe payment method:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Methods**, and choose the related link.

   ![](media/garagehive-stripe-payment-method1.png)

2. Create a **New** payment method and name it **Stripe**. Link it to the **G/L Account** by entering the **Bal. Account No.**.

   ![](media/garagehive-stripe-payment-method2.png)

3. Next, search for **Location Payment Methods**, and choose the related link.

   ![](media/garagehive-stripe-payment-method3.png)

4. Create a **New** Location Payment Method, select the Stripe **Payment Method Code** and connect it to the **Payment Gateway Code** that you set up.

   ![](media/garagehive-stripe-payment-method4.png)


[Go back to top](#top)

### Take Payment using Stripe Payment Method
To take payment using **Stripe** from a document:
1. Select **Payments/Posting** from the menu bar, and choose **Take Payment**.

   ![](media/garagehive-stripe-take-payment1.png)

2. In the **Document Payments** page, click on **Pay By Garage Link** in the menu bar.

   ![](media/garagehive-stripe-take-payment2.png)

3. Select **Stripe** in the next page, and click **OK**.

   ![](media/garagehive-stripe-take-payment3.png)

4. Enter the **Payment Amount** (the default is the total document amount), choose the **Notification Type**, and provide the **Email or Mobile Phone No.** for the notification. Click **OK**.

   ![](media/garagehive-stripe-take-payment4.png)

5. The customer will receive a **Payment Request** message with a link for the payment.

   ![](media/garagehive-stripe-take-payment5.png)

6. When the customer clicks the link, they will be taken to a payment page where they can enter their card details and complete the payment.

   ![](media/garagehive-stripe-take-payment6.png)

[Go back to top](#top)