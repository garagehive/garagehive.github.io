---
layout: docs
title: DRAFT* - Vendor Payment Process in Garage Hive
---

<a name="top"></a>

# We are still working on this article!
We are currently reviewing this article before it is published, check back later.

# Vendor Payment Process in Garage Hive
It is essential to always pay your vendors on time and accurately. However, managing vendor payments can be complex and time-consuming, especially with multiple suppliers with different payment terms. This article will walk you through making vendor payments in Garage Hive.

## In this article
1. [Generate Aged Accounts Payables Report](#generate-aged-accounts-payables-report)
2. [Create and Post Payment Journals](#create-and-post-payment-journals)
3. [Create Payments from Vendor Ledger Entries](#create-payments-from-vendor-ledger-entries)

### Generate Aged Accounts Payables Report
The first thing to do while paying the vendors is to generate an ageing accounts payables report to see the outstanding invoices and their due dates:
1. Select **Purchasing** from the Role Centre, followed by **Vendors**. 

   ![](media/garagehive-vendor-payments-aged-report4.png)

3. Then from the vendor list, choose **Reports**, followed by **Financial Management** and then **Aged Accounts Payable**.

   ![](media/garagehive-vendor-payments-aged-report1.png)

4. In the **Aged Accounts Payable** filter window, select the **Aged as Of** date, select **Ageing by** to be **Due Date** and **Period Length** to be **1M**.
5. Select the **Print Details** slider to view the invoices for the Vendor and **Use External Document No.** slider to print the vendor’s document number.
6. Click on Preview to preview the report.

   ![](media/garagehive-vendor-payments-aged-report2.png)

7. The report will be previewed, and you can print it to use it on making payments to the vendors.

   ![](media/garagehive-vendor-payments-aged-report3.png)


[Go back to top](#top)

### Create and Post Payment Journals
The first option for making payments to vendors is through the **Payment Journals**. Here is how to go about it:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Journals**, and select the related link.

   ![](media/garagehive-vendor-payments-payment-journal1.png)

2. Select the **General Journal Template** to use and click **OK**.

   ![](media/garagehive-vendor-payments-payment-journal2.png)

3. To make it easier to enter the **Payment Journals**, choose **Prepare** from the menu bar and then **Suggest Vendor Payments**. This generates payment journal lines based on the last payment date, which checks invoice due dates up to the date specified. The other option is to enter the payment journals manually.

   ![](media/garagehive-vendor-payments-payment-journal3.png)

4. In the **Suggest Vendor Payments** filter window, select the **Last Payment Date** for the vendor payments, then select **Skip Exported Payment**, **Check Other Journal Batches** and **Summarise per Vendor** sliders.

   ![](media/garagehive-vendor-payments-payment-journal4.png)

5. Enter the **Balance Account Type**, **Balance Account No.**, and **Bank Payment Type**. This is important if you're doing it for the first time, because whatever you choose now will always be the default setting.
6. Click OK.

   ![](media/garagehive-vendor-payments-payment-journal5.png)

7. To assign a numbers (if there are no numbers) in **Document No.** column, select **Process**, followed by **Renumber Document Numbers**.

   ![](media/garagehive-vendor-payments-payment-journal6.png)

8. Select **Post/Print** from the menu bar and then **Post** to post the **Payment Journals**. To see if there are any errors in the posting, select **Preview Posting**.

   ![](media/garagehive-vendor-payments-payment-journal7.png)

[Go back to top](#top)

### Create Payments from Vendor Ledger Entries
The other option for making payments to vendors is from the Vendor Ledger Entries. Here is how:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Vendor Ledger Entries**, and select the related link.

   ![](media/garagehive-vendor-payments-vendor-ledger-entries1.png)

2. Hold down the **Ctrl** key and use your mouse to select all of the **Vendor Ledger Entries** for which you want to create a payment.
3. Select **Process**, followed by **Create Payment**.

   ![](media/garagehive-vendor-payments-vendor-ledger-entries2.png)

4. Edit the payment details in the pop-up window, and click **OK**.

   ![](media/garagehive-vendor-payments-vendor-ledger-entries3.png)

5. This opens the **Payment Journal** page with the payments that you selected to be paid.
6. To Post the **Payment Journals**, select **Post/Print** from the menu bar and then **Post**.

   ![](media/garagehive-vendor-payments-vendor-ledger-entries4.png)

[Go back to top](#top)