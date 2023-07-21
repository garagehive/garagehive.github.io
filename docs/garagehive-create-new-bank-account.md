---
layout: docs
title: How to create Bank Accounts and Import Bank Statements
---

# How to create Bank Accounts and Import Bank Statements
Creating bank accounts and importing bank statements in Garage Hive is important when it comes to financial management because they help you improve tracking and controlling financial transactions in the system. This process should be done in consultation with your accountant for further guidance.

## In this article
1. [Creating a Bank Account](#creating-a-bank-account)
2. [Importing Bank Statements](#importing-bank-statements)


### Creating a Bank Account
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Chart of Accounts**, and select the related link.

   ![](media/garagehive-search-chart-of-accounts.png)

1. By default, your system should have the following bank accounts set up: 
   - **1200** – Bank Account
   - **1201** – Savings Account
1. Select **New** from the menu bar.

   ![](media/garagehive-chart-of-accounts-default-banks.png)

1. Enter the **No.** as the next sequential number from the previously created bank accounts, followed by the name of the new bank account. Set up the **General** FastTab as shown below. Take note that **Direct Posting** is disabled. Click the back arrow (&#8592;) to close the card after the setup.

   ![](media/garagehive-chart-of-accounts-bank-create.png)

1. The next step is to search for **Bank Accounts** in the top right corner search ![](media/search_icon.png) icon, and select the related link.

   ![](media/garagehive-search-bank-accounts.png)

1. Select **New** from the menu bar to add the newly created bank account.

   ![](media/garagehive-bank-accounts-new.png)

1. Enter the **No.** of the bank account beginning with **"B"**, followed by the code you created in the chart of accounts, for example **B1202**, and the bank account name. You can fill out the remaining fields if you want, but it is not required.

   ![](media/garagehive-bank-accounts-new-details.png)

1. Scroll down to the **Posting** FastTab, then click the down arrow (&#709;) in the **Bank Acc. Posting Group** field, then **select from the full list**. 

   ![](media/garagehive-bank-accounts-posting-group-select.png)

1. In the **Bank Account Posting Groups** page, select **New**, enter the name of the bank in the **Code** field, and use the code you created in the chart of accounts as the **G/L Account No.**. Click the **OK**.

   ![](media/garagehive-bank-accounts-posting-group-created.png)

1. Confirm that the **Posting Group** selected is correct for the bank account. Click the back arrow (&#8592;) to close bank account card.

   ![](media/garagehive-bank-accounts-posting-group-check.png)

1. The bank account will now be created and ready for use.

{% include tip.html title="Note" text="If you intend to make payments directly into or out of this bank account, you should set up additional payment methods." %}


### Importing Bank Statements
To import bank statements in Garage Hive:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **Bank Account Reconciliations**, and select the related link.

   ![](media/garagehive-bank-statements-import1.png)

1. Select **New** from the menu bar.

   ![](media/garagehive-bank-statements-import2.png)

1. In the **Bank Account No.** select the relevant bank account. The bank account ledger entries that exist on the bank account appear in the **Bank Account Ledger Entries** pane.
1. In the **Statement Date** field, enter the date of the statement from the bank.
1. In the **Balance Last Statement** field, enter the balance of the last statement used in the posted bank reconciliation for the selected bank account. If this is your first time importing the statement, leave this field blank.
1. In the **Statement Ending Balance** field, enter the balance of the statement from the bank.

   ![](media/garagehive-bank-statements-import3.png)

1. Select **Bank** from the menu bar, followed by the **Import Bank Statement** action.

   ![](media/garagehive-bank-statements-import4.png)

1. Locate the file, and then choose the Open button to import the bank transactions into the **Bank Statement Lines** pane on the **Bank Acc. Reconciliation** page.

   ![](media/garagehive-bank-statements-import5.png)

1. To match bank statement lines with bank account ledger entries automatically, select **Matching** from the menu bar and choose **Match Automatically**. The **Match Bank Entries** page opens.

   ![](media/garagehive-bank-statements-import6.png)

1. In the **Transaction Date Tolerance (Days)** field, specify the span of days before and after the bank account ledger entry posting date within which the action will search for matching transaction dates in the bank statement.
1. If you enter 0 or leave the field blank, the **Match Automatically** action will only search for matching transaction dates on the bank account ledger entry posting date. Click **OK**.

   ![](media/garagehive-bank-statements-import7.png)

1. You'll get a notification on how many lines have been matched. The matched lines turn to bold green font. Bank account ledger entries that are matched on other bank reconciliations are shown in italic blue font.
1. To remove a match, select the bank statement line, select **Matching** from the menu bar, and then **Remove Match** action.

   ![](media/garagehive-bank-statements-import8.png)

1. To match bank statement lines with bank account ledger entries manually, select a non-applied line in the **Bank Statement Lines** pane.
1. In the **Bank Account Ledger Entries** pane, select one or more banks account ledger entries that can be matched with the selected bank statement line. To choose multiple lines, select and hold the **CTRL** key and then choose the lines.

   ![](media/garagehive-bank-statements-import9.png)

1. Select **Matching** from the menu bar, and choose the **Match Manually** action. The selected bank statement line and the selected bank account ledger entries change to green font, and the Applied checkbox in the right pane is selected.

   ![](media/garagehive-bank-statements-import10.png)

1. Repeat steps 1 through 3 for all bank statement lines that aren't matched.
1. To double-check your bank account reconciliation before you post it, select **Posting**, and choose the **Test Report** action to preview the reconciliation.

   ![](media/garagehive-bank-statements-import11.png)

1. After confirming, select **Posting**, followed by **Post** to post the bank reconciliation.

   ![](media/garagehive-bank-statements-import12.png)







