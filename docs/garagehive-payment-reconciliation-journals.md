---
layout: docs
title: Working with Payment Reconciliation Journals
---

# Working with Payment Reconciliation Journals 
You must regularly reconcile your bank, receivables and payables accounts by applying payments recorded in the bank to their related open (unpaid) invoices and credit memos or other open entries in Garage Hive. You can do this on the **Payment Reconciliation Journal** page, for example, by importing a bank statement file to register the payments quickly. <br>

The following are the supported bank statement formats:

| Bank Statements    | Bank Statements (Cont'd) |
| :----------------- | :----------------------- |
| - AIB Business     | - HSBC                   |
| - AIB Personal     | - ICON                   |
| - American Express | - Lloyds                 |
| - Bank of Ireland  | - NatWest Bankline       |
| - Barclaycard      | - NatWest Online Banking |
| - Barclays         | - PLEO                   |
| - HBOS             | - Santander              |
| - starling         | - DEXT                   |
| - Generic          | - Metro                  |
| - Monzo            | - NetBank                |

   ![](media/garagehive-bank-statements-supported.png)

If the bank statement format you need is not listed above, you can use the **Generic** method, to import your statement as follows:
1. To import data using the **Generic** method, the file must be formatted with three specific columns: **Date, Description, and Amount**, and save it in **CSV file format**. Here is an example:

   | Date (dd/mm/yyyy) | Description                        | Amount (Positive - Money In, or Negative - Money Out) |
   | :---------------- | :--------------------------------- | :---------------------------------------------------- |
   | 01/03/2024        | Customer Invoice #001 Payment      | 450                                                   |
   | 02/03/2024        | Auto Parts Supply - Euro Car Parts | -200                                                  |
   | 03/03/2024        | Utility Bill - Electricity         | -120                                                  |
   | 04/03/2024        | Sale of Used Car                   | 5000                                                  |

2. After your bank statement file is prepared, search for the **Payment Reconciliation Journal** page and choose **Custom Import Transactions** followed by **Generic**.

   ![](media/garagehive-bank-statement-generic1.png)

3. Once the import window pops up, choose your file to import it. The data will be imported automatically.

   ![](media/garagehive-bank-statement-generic2.png)

<br>

You can also reconcile bank accounts without simultaneously applying payments on the **Bank Acc. Reconciliation** page. <br>
The following is a list of tasks involved in working with payment reconciliation journals, alongside links to topics that describe them:
<br>

1. [Reconcile payments using the automatic application](garagehive-reconcile-payments-using-automatic-application.html){:target="_blank"}.
2. [Review or apply payments after automatic application](garagehive-review-or-apply-payments-after-automatic-application.html){:target="_blank"}.
3. [Reconcile payments that cannot be applied automatically](garagehive-reconcile-payments-that-cannot-be-applied-automatically.html){:target="_blank"}.
4. [Map text on recurring payments to accounts for automatic reconciliation](garagehive-map-text-on-recurring-payments-to-accounts-for-automatic-reconciliation.html){:target="_blank"}.

<br>

### **See Also**

[Video: How to perform a Payment Reconciliation Journal in Microsoft Dynamics Business Central](https://www.youtube.com/watch?v=WiAnm_VUQVQ){:target="_blank"}

