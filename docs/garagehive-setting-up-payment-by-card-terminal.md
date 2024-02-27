---
layout: docs
title: Setting Up Payment by Card Terminal
---

<a name="top"></a>

## Setting Up Payment by Card Terminal
To setup payment by **Card Terminal**:
1. **Payment Sense** will send you an email with the details you'll need to set up the integration; here's an example:

   ![](media/garagehive-card-terminal1.png)

2. Open your Garage Hive system, in the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Gateways**, and select the related link.
3. Select **New** from the **Payment Gateways** page to add a new payment method.

   ![](media/garagehive-card-terminal2.gif)

4. In the **General** FastTab of the **Payment Gateway Card**, enter the payment method code; in this case, we'll add **CARDTERMINAL**.
5. Select **Card Terminal (Paymentsense)** in the **Payment System** field.

   ![](media/garagehive-card-terminal3.png)

6. In the **Card Terminal (Connect)** FastTab, enter the details that are on the email from payment sense; that is **User URL**, **API Key** and the **Terminal ID**. After filling in the fields, enable the payment method by selecting the **Enabled** slider in **General** FastTab.

   {% include tip.html title="Note" text="The User URL is the number that appears at the beginning of the API URL. Only the number should be copied into the User URL field." %}

   ![](media/garagehive-card-terminal4.png)

7. Click the **Back** arrow to exit the **Payment Gateway Card** and save your changes. Your new payment method is now active.


[Go back to top](#top)

<br>

{% include tip.html title="Note" text="You can set up multiple card terminals based on the number of terminals available at your location." %}

<br>

### See Also

[Taking a Payment and Posting a Jobsheet](garagehive-jobsheet-taking-payment.html){:target="_blank"} \
[Setting Up Payment by Garage Link for Pay360](garagehive-payment-gateways.html){:target="_blank"} \
[Setting Up Payment by Garage Link for Dojo](garagehive-payment-gateways.html){:target="_blank"} \
[How to Use Humm Financing](garagehive-humm-financing.html){:target="_blank"} \
[How to Set Card Terminals Into Integration Mode](garagehive-setting-card-terminals-into-integration-mode.html){:target="_blank"} \
[Generating Paymentsense Card Machine End of Day, X Balance and Z Balance Report](garagehive-paymentsense-card-machine-x-and-z-report.html){:target="_blank"}
 
