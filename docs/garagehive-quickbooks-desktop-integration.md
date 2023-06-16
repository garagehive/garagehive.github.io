---
layout: docs
title: How to Integrate Garage Hive With QuickBooks Desktop
---

<a name="top"></a>

# How to Integrate Garage Hive With QuickBooks Desktop
Garage Hive has enabled the seamless integration of the QuickBooks Desktop system, allowing you to continue performing your accounting procedures with efficiency and accuracy.

## In this article
1. [Initial Setup](#initial-setup)
2. [Integrate Chart of Accounts](#integrate-chart-of-accounts)
3. [Integrate Payment Methods](#integrate-payment-methods)

### Initial Setup
To integrate **QuickBooks Desktop** with Garage Hive:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Accountancy Integration Setup**, and select the related link.

   ![](media/garagehive-quickbooks-desktop1.png)

2. In the **General** FastTab, select **QuickBooks Desktop** as your accounting system in the **Accountancy System** field.

   ![](media/garagehive-quickbooks-desktop2.png)

3. Turn on the **Integration Enabled** slider and select **Document Date** in both the **Export Customer Ledger by** and **Export Vendor Ledger by** fields.

   ![](media/garagehive-quickbooks-desktop3.png)

4. From the menu bar Select **Init. Customers** and **Init. Vendors**, then click **Yes** in the pop-up windows. This generates an **External System No.** for all **Customer** and **Vendor** cards in Garage Hive. Exit the page.

   ![](media/garagehive-quickbooks-desktop4.gif)

5. When you open any **Customer** or **Vendor** card, you will see the **External System No.** as shown below.

   * Customer Card:
  
      ![](media/garagehive-quickbooks-desktop5.png)

   * Vendor Card:

      ![](media/garagehive-quickbooks-desktop6.png)

[Go back to top](#top)

### Integrate Chart of Accounts
To integrate the **Chart of Accounts** to **QuickBooks Desktop** accounting system: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Chart of Accounts** and select the related link.

   ![](media/garagehive-quickbooks-desktop7.png)

2. In the **Chart of Accounts** page, select **Edit List** from the menu bar.
3. In the **External System No.** column, enter the account number for the accounts you want to integrate with **Sage 50 Cloud Accounts**. In this case, we'll integrate all of the **4000s** accounts.

   {% include tip.html title="Note" text="Typically only the 4000's and 5000's accounts are needed." %}

   ![](media/garagehive-quickbooks-desktop8.png)

[Go back to top](#top)

### Integrate Payment Methods
To add the **External System No.** to the **Payments Methods**: 
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Payment Methods** and select the related link.

   ![](media/garagehive-quickbooks-desktop9.png)

2. In the **External System No.** column, enter the corresponding code for the **Payment Methods** that you use in your external system.

   ![](media/garagehive-quickbooks-desktop10.png)

[Go back to top](#top)

<br>

### **See Also**

[How to Export to Your External Accountancy System](garagehive-finance-accountancy-export.html){:target="_blank"} \
[Accountancy System Integrations](garagehive-external-accountancy-integration.html)



