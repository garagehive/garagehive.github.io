---
layout: docs
title: Managing Deposits in Garage Hive
---

<a name="top"></a>

# Managing Deposits in Garage Hive
This article provides guidance on how to take a deposit from a customer, using the deposit as a Payment Method and applying the deposit to posted documents.

## In this article
1. [How to Take a Deposit in a Document](#how-to-take-a-deposit-in-a-document)
2. [How to Post Deposits to Customer Accounts](#how-to-post-deposits-to-customer-accounts)
3. [Using Deposit Amount as Payment Method in a Jobsheet](#using-deposit-amount-as-payment-method-in-a-jobsheet)
4. [Applying Deposits to Posted Documents](#applying-deposits-to-posted-documents)
5. [How to Refund a Deposit](#how-to-refund-a-deposit)

### How to Take a Deposit in a Document
To take a deposit on a document, such as a Jobsheet, Sales Order, or Sales Invoice:
1. Open the document from which you want to take a deposit, then select **Payments/Posting** from the menu bar, followed by **Take Deposit**.

   ![](media/garagehive-take-deposit-in-a-document1.png)

2. Enter the **Payment Method** in the **Payment Method Code** field and click **Next**.

   ![](media/garagehive-take-deposit-in-a-document2.png)

3. In the **Amount** field, enter the amount the customer wishes to pay as a deposit for the document. You can also add a description in the **Description** field. Click **Next**.

   ![](media/garagehive-take-deposit-in-a-document3.png)

4. Before posting, double-check the deposit's details. If you need to make any changes, click **Back** to return to the previous page.
5. Click on **Post** after reviewing and confirming all the details are correct.
6. You can select to **Print** or **Email** the receipt.

   ![](media/garagehive-take-deposit-in-a-document4.png)

[Go back to top](#top)

### How to Post Deposits to Customer Accounts
1. From the **Role Centre**, select **Take Payment**.

   ![](media/take-payment-home.png)

1. In the **Customer Name** field, type to find and select the customer's name.

   ![](media/take-payment-customer.png)

1. Once selected, the customer's balance will be displayed in the **Customer Balance** field.
1. Click on the ellipsis (...) in the **Payment Method Code** field to select a payment method.
1. Since you want to take a Deposit Payment, select the **Deposit Payment** slider.
1. The **Next** button is now active, and you can proceed to the next page.

   ![](media/take-payment-payment-method.png)

1. In the next page, enter the amount of the deposit to be received in the **Amount** field and add a description, which is by default **Deposit**.
1. The **Next** button is now active, and you can proceed to the next page.

   ![](media/take-payment-deposit.png)

1. Before posting, review the Deposit Payment details on the last page.
1. In the **Receipt** field, choose whether to **Print** or **Email** the receipt.

   ![](media/take-payment-deposit2.png)

1. If you have an integrated card terminal and have chosen a card payment method, the **Lump Payment** option will be selected by default. This means that if you choose to post this Payment, the card terminal will be triggered and the entry will be posted if the Payment is successful. 

   ![](media/take-payment-integrated-card-terminal.png)

1. Select **Post** to post the payment.

   ![](media/take-payment-post-card.png)

[Go back to top](#top)

### Using Deposit Amount as Payment Method in a Jobsheet
If you want to use deposit amount as payment method in a Jobsheet:
1. Open the Jobsheet to which you want to apply the deposit.
2. Select the **Payments/Posting** menu and then click **Take Payment**.

   ![](media/take-payment-with-deposit-amount1.png)

3. The **Available Deposit** is shown at the top of the **Take Payment** page. If the document has a different **Bill-To** customer from the **Sell-To**, both deposits will be indicated.

   ![](media/take-payment-with-deposit-amount4.png)

4. Select **UseDeposit** from the list of payment methods and enter the amount you want to use in the **Amount** column.

   ![](media/take-payment-with-deposit-amount2.png)

5. You can also use the **Apply Deposit Amount** action, which appears on the notification at the top,  to use the entire deposit amount available for the customer or to fill in the **Difference** for the amount paid in the **UseDeposit** payment method.
6. Close the payment method window by clicking **Close**.

   ![](media/take-payment-with-deposit-amount3.png)

7. You can now **Post** the Jobsheet, and the **Deposit Amount** will be applied to the Jobsheet as a payment method.

[Go back to top](#top)

### Applying Deposits to Posted Documents
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Customer Ledger Entries**, and select the related link.

   ![](media/apply-deposit-payment1.png)

2. Select the document to which you want to apply the deposit, then **Home** from the menu bar, followed by **Close With Deposit - Preview** to preview the posting.

   ![](media/apply-deposit-payment2.png)

3. The **Posting Preview** page appears. After you've confirmed the posting, close the page.

   ![](media/apply-deposit-payment3.png)

4. You can now apply the deposit by selecting **Home** from the menu bar, followed by **Close With Deposit**.

   ![](media/apply-deposit-payment4.png)

5. In the **Deposit Entries** page, select the deposit you want to apply and click **OK**.

   ![](media/apply-deposit-payment5.png)

6. In the notification *"Do you want to post the journal lines?"* select **Yes**.

   ![](media/apply-deposit-payment6.png)


[Go back to top](#top)

### How to Refund a Deposit

   {% include tip.html title="Note" text="It is recommended to avoid accepting deposits that will likely need to be refunded. Only initiate the refund process when absolutely necessary." %}

To refund a deposit, a posted document reflecting the total amount to be refunded is required. Follow these steps:
1. Create a **Non-Inventory** item card and call it **Refund Deposit** for easier reference. Assign the **VAT Prod. Posting Group** as **NOVAT** as it is a non-vatable item.

   ![](media/apply-deposit-refund1.png)

2. Next, create a new Jobsheet for the customer who is to receive the refund, and include the vehicle for which the deposit was made. Add the **Refund Deposit** item, ensuring the total amount matches the deposit being refunded.
3. In the menu bar, select **Payments/Posting**, then click on **Take Payment**.

   ![](media/apply-deposit-refund2.png)

4. On the **Document Payments** page, choose **Apply Deposit Amount** from the notification, then close the page.

   ![](media/apply-deposit-refund3.png)

5. Post the Jobsheet.

   ![](media/apply-deposit-refund4.png)

6. The next step is to create a **Return Jobsheet**, with the same details as the **Jobsheet**. In the lines, include the **Refund Deposit** item. After adding the details, select **Refund/Posting**, followed by **Process Refund** in the menu bar.

   ![](media/apply-deposit-refund5.png)

7. In the **Document Payments** page, enter the amount to refund along the **Payment Method** line that the Deposit was refunded to the customer, and close the page.

   ![](media/apply-deposit-refund6.png)

8. Finally, post the **Return Jobsheet**, which will record the refund of the deposit.

   ![](media/apply-deposit-refund7.png)


[Go back to top](#top)

<br>

### **See Also**
[Video: How to take payments & deposits](https://www.youtube.com/watch?v=akx2eeBwRIo){:target="_blank"}
