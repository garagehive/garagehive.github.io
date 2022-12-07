---
layout: docs
title: Taking a Payment and Posting a Jobsheet
---

When a Jobsheet is completed, it should now be posted in order to update the relevant accounts in the system. To do so, you must understand how to take payment on a Jobsheet, update the Jobsheet lines, and then post the Jobsheet.

## In this article
1. [Taking a payment in a Jobsheet](#taking-a-payment-in-a-jobsheet)
2. [Adding resources to labour lines in a Jobsheet](#adding-resources-to-labour-lines-in-a-jobsheet)
3. [Updating the items numbers and quantities](#updating-the-items-numbers-and-quantities)
4. [Posting the jobsheet](#posting-the-jobsheet)

### Taking a payment in a Jobsheet 
When the job is complete and the financial information is correct. You now need to collect the payment from the customer and post the jobsheet.
1. Select **Payments/Posting** from the jobsheet's menu bar, then **Take Payment** to mark the customer's payment method and add the amount paid along the customer's payment method row.

    ![](media/garagehive-jobsheet-taking-payment1.png)

    ![](media/garagehive-jobsheet-taking-payment2.png)

2. You can view other payments that have been applied in the document by selecting **Payment Gateway Entries** action, in the **Take Payment** window.

    ![](media/garagehive-jobsheet-taking-payment2a.png)

### Adding resources to labour lines in a Jobsheet
Before posting the jobsheet, all labour lines must-have resource information added to them. There are several ways this can be done:
1. If the Technician uses the Technician **Confirmed** button on their device, the resources column will be pre-populated.

    ![](media/garagehive-jobsheet-adding-resources1.gif)

2. If a front-of-house staff member is familiar with the Technician's **Resource No.**, they can add this directly to the labour line and then press the **Tab** key to assign 100% of that labour line to that specific Technician.

    ![](media/garagehive-jobsheet-adding-resources2.gif)  

3. If multiple technicians are working on the job or there are multiple labour lines upon which a sole technician has clocked onto a job, you can select **Process** followed by A**dd Resources to Lines**. This will either split the total time spent between multiple technicians on all lines, or it will add 100% to all labour lines for one specific technician. 

    ![](media/garagehive-jobsheet-adding-resources3.gif)

4. If you post the jobsheet without adding the resources, you will be prompted to do so automatically before posting.

    ![](media/garagehive-jobsheet-adding-resources4.gif)

### Updating the items numbers and quantities
1. All item numbers must be updated from the **Placeholder Item**, such as **MISC, to their actual item numbers. Ensure that the quantities and prices of the items remain unchanged.

    ![](media/garagehive-jobsheet-placeholder-item1.gif)

    - If all part numbers with **Placeholder Item** have not been updated/added to the jobsheet, the following error message will be displayed:

        ![](media/garagehive-jobsheet-placeholder-item2.png)

2. All parts need to be bought into stock. If all parts have not been accepted into stock using a purchase order, you will get an error message: 

    ![](media/garagehive-jobsheet-taking-payment3.png)


### Posting the jobsheet
Now, you have the option of:  
* To **Post** - Post/invoice this jobsheet without the option of printing or emailing it.
* To **Post and Print** - Post/invoice this jobsheet and print a copy of the invoice.
* To **Post and Email** - Post/invoice this jobsheet and email a copy of the invoice to the **Bill-To Customer**.
Select **Payment/Posting** from the menu bar and select either of the above according to your requirements. Click **Yes** on the pop-up notification of *do you want to post the Jobsheet?*.

    ![](media/garagehive-jobsheet-posting1.gif)

<br>

{% include tip.html title="Note" text="After the jobsheet has been posted, it can be found in Posted & Archived Documents under Posted Jobsheet, which can be accessed from the role centre navigation menu." %}