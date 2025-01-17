---
layout: docs
title: Sage Accounting Integration Setup
---

<a name="top"></a>

## In this article
1. [Initial Setup](#initial-setup)
2. [Integrate Chart of Accounts](#integrate-chart-of-accounts)
3. [Integrate Payment Methods](#integrate-payment-methods)
4. [Integrate VAT Posting](#integrate-vat-posting)
3. [How to run the export](#how-to-run-the-export)
4. [What you can export via the Sage Accounting integration](#what-you-can-export-via-the-sage-accounting-integration)

### Initial Setup
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Accountancy Integration Setup**, and select the related link.

   ![](media/garagehive-sage-accounting-setup1.png)

1. Select **Sage Accounting 2** as the **Accountancy System** in the **General** FastTab.
1. Specify whether the data should be exported using the posting date or the document date in the **Export Customer Ledger by** and **Export Vendor Ledger by** fields. The most commonly used approach is by **Document Date**. Garage Hive users are often limited to only posting within the current date, therefore the posting date may differ from the date on the invoice from the supplier, whereas the document date would match.

   ![](media/garagehive-sage-accounting-setup2.png)

1. If you have a business with multiple locations/cost centres, select **Branch** as the **Department Dimension Code** in **Sage Accounting** FastTab.

   ![](media/garagehive-sage-accounting-setup4a.png)

1. To authorise data sharing with **Sage Accounting 2** software, select **Actions** from the menu bar, then **Sage Accounting**, and then **Authorise**. 

   ![](media/garagehive-sage-accounting-setup4.png)

1. This opens **Sage Accounting** software, where you must log in to successfully authorise sending data directly to Sage Accounting software.

   ![](media/garagehive-sage-accounting-setup5.png)

1. After logging in, you will see a notification that says *Link to Sage established successfully* and you can close the window.

   ![](media/garagehive-sage-accounting-setup6.png)

1. Return to Garage Hive and enable the integration by selecting the **Integration Enabled** slider.

   ![](media/garagehive-sage-accounting-setup7.png)


[Go back to top](#top)

### Integrate Chart of Accounts
To integrate the **Chart of Accounts** to **Sage Accounting** system: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Chart of Accounts** and select the related link.

   ![](media/garagehive-sage-accounting-chart-of-accounts1.png)

2. In the **Chart of Accounts** page, select **Edit List** from the menu bar.
3. In the **External System No.** column, click on the three dots to select the corresponding **Account** that you use in your external system. In this case, we'll integrate all of the **4000s** accounts.

   {% include tip.html title="Note" text="Typically only the 4000's and 5000's accounts are needed." %}

   ![](media/garagehive-sage-accounting-chart-of-accounts2.png)


[Go back to top](#top)

### Integrate Payment Methods
To add the **External System No.** to the **Payments Methods**: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Methods** and select the related link.

   ![](media/garagehive-sage-accounting-payment-methods1.png)

2. In the **External System No.** column, click on the three dots to select the corresponding code for the **Payment Methods** that you use in your external system.

   ![](media/garagehive-sage-accounting-payment-methods2.png)


[Go back to top](#top)

### Integrate VAT Posting
To integrate the VAT posting in your system: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **VAT Posting Setup** and select the related link.

   ![](media/garagehive-sage-accounting-vat-posting1.png)

2. In the **External VAT Identifier Code** column, click on the three dots to select the corresponding code for the **VAT Posting** that you use in your external system.

   ![](media/garagehive-sage-accounting-vat-posting2.png)


[Go back to top](#top)

### How To Run the Export 
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Export to Accountancy System**, and select the related link.

    ![](media/garagehive-sage-accounting-setup8.png)

2. Select the following options:
   * **Export Customer Invoices/Credit Memos** - This will export all Customer invoices/credit memos for the given date range. 
   * **Export Customer Payments/Refunds** - This will export Invoice payments/refunds as well as payments to accounts within the specified date range.
   * **Export Vendor Invoices/Credit Memos** - This will export all posted purchase orders/purchase invoices as well as posted purchase return orders/purchase credit memos within the given date range.
   * **Export Type** - All or New. Select **New**. Selecting **New** will exclude any previously exported documents. When using **New**, a transaction that has already been exported, will not be exported again.
   * **Date From** and **Date To** - Choose your date range.

3. Under Catalogs:
   * **Export All Customers** - This will generate an export of all customers in the system (**It is highly recommended that you never select this**).
   * **Export All Vendors** - This will generate an export of all vendors in the system (**It is highly recommended that you never select this**).

4. Click **OK**, to start exporting the data.

   ![](media/garagehive-sage-accounting-setup9.png)


[Go back to top](#top)

### What you can export via the Sage Accounting integration

Garage Hive allows you to export your data to Sage Accounting; you can export the following:

* Customer Invoices
* Customer Credit Memos
* Customer Payments
* Customer Refunds
* Vendor Invoices
* Vendor Credit memos

{% include tip.html title="Note" text="We currently don't support exporting vendor payments, it is recommended that this is done in your external accountancy system." %}


[Go back to top](#top)


<br>

### **See Also**

[Video: Garage Hive Integration with Sage Accounting](https://www.youtube.com/watch?v=-UMuQjqTgmQ){:target="_blank"} \
[Accounting System Integrations](garagehive-external-accountancy-integration.html){:target="_blank"} \
[How to Export to Your External Accountancy System](garagehive-finance-accountancy-export.html){:target="_blank"}


