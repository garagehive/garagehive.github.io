---
layout: docs
title: Vehicle Inspection Estimates (VIEs)
---

# How to use Vehicle Inspection Estimates (VIEs)

VIEs in Garage Hive allow you to manage and monitor your upsell, additional authorization, and estimates across all of your service staff. VIEs are created by confirming a [Vehicle Inspection Checklist](/docs/garagehive-technicians-vehicle-inspections.html "How to Perform a Vehicle Inspection") or a **Quality Control Checklist**.

## In this article
1. [Understanding the process from jobsheet to VIE back to jobsheet](#understanding-the-process-from-jobsheet-to-vie-back-to-jobsheet)
2. [Confirming a checklist to a VIE](#confirming-a-checklist-to-a-vie)
3. [Different VIE statuses](#different-vie-statuses)
4. [Adding customer authorisation and copy the authorised lines to jobsheet](#adding-customer-authorisation-and-copy-the-authorised-lines-to-jobsheet)


### Understanding the process from jobsheet to VIE and back to jobsheet
To help you understand the process of creating a VIE from a jobsheet, we've created the flowchart below, which shows all of the steps involved.

![](media/garagehive-vehicle-inspection-estimate1.png)

1. Once the jobsheet is created, the technician creates a **Vehicle Inspection** linked to the jobsheet and inspects the vehicle.
2. Depending on the outcome of the inspection, the vehicle may require additional work or not. If not, there is no need to create a VIE.
3. If yes, then the service advisor checks and confirms the vehicle inspection and creates a **Vehicle Inspection Estimate**.
4. The vehicle inspection estimate is filled out with the items and labour needed for the identified work, and the service advisor then shares the quotation with the customer **for authorisation**.
5. When the customer gives approval for the work to be done, the work that has been approved is **copied to the linked jobsheet**, and the work that has not been approved is given a **reminder date** for future reference.

### Confirming a checklist to a VIE
To verify a checklist that has been completed by a technician:
1. On the checklist page, click **Process** and then **Confirm** from the actions bar.
2. To create a VIE, answer **Yes** to the prompt question that appears.

   ![](media/garagehive-vehicle-inspection-estimate2.gif)

3. To auto-fill the **Service Advisor Code** when it is blank, search for **Service Mgt. Setup GH** in the top-right corner search icon and select **Yes** for **Auto-fill Service Advisor in VI Estimates** field in **General** FastTab, which now ensures that the **Service Advisor Code** is filled in after the vehicle inspection is confirmed.

   ![](media/garagehive-vehicle-inspection-estimate2.1.gif)

> **Note:**
>
> After confirming the checklist, change the **Process Status** on the checklist to **Completed**, so as archive the checklist card.

### Different VIE statuses 
From the **Role Centre**, the VIE has the following statuses that it goes through:

![](media/garagehive-vehicle-inspection-estimate3.png)

* **Awaiting Action** tile - shows the number of VIEs that are created from completed checklists but have yet to be acted upon. 
* **Awaiting Parts** tile - shows the number of VIEs that have been added items and labour but are now waiting for the parts department to fill in the parts information.
* **Awaiting Advisor** - shows the number of completed VIEs that are awaiting confirmation and verification from the service advisor before being sent to the customer.
* **Awaiting Authorisation** - the number of completed VIEs that have been sent to the customer and are now awaiting approval from the customer.

The VIE status can be changed from the document as follows:
1. Click on the tile with the VIE you want to change the status.
2. Select the VIE from the list that appears by clicking on the **No.** of the VIE to open.
3. From the VIE's **General** FastTab, scroll to the **VIE Status** field and select the status to change to from the drop-down menu.

![](media/garagehive-vehicle-inspection-estimate4.gif)

### Add items and labour to the vehicle inspection estimate
After creating a VIE from the checklist, the status is **Awaiting Action**, to give the service advisor an alert to take action:
1. Click on the **Awaiting Action** tile to open the VIE list, and select the VIE to work on.
2. Add items and labour to the VIE according to the checks done.
3. Change the **VIE Status** to **Awaiting Authorisation** from the customer, which moves it from the **Awaiting Action** to **Awaiting Authorisation** tile.

   ![](media/garagehive-trial-processing-a-vehicle-inspection-estimate4.gif)

   <br>

   ![](media/garagehive-trial-vehicle-inspection-estimate-awaiting-authorisation.png)

4. If you click on any amount under the **Totals Including VAT**, which is below the vehicle inspection estimate lines, a pop-up window appears which shows the **Document Total**, **Price Calculation**, **Jobsheet Value (Current)** totals, **Customer Authorised** totals, **Customer Unauthorised** totals and **Combined Total (Authorised)**.

   ![](media/garagehive-trial-processing-a-vehicle-inspection-estimate4a.gif)

### Adding customer authorisation and copy the authorised lines to jobsheet
You've already communicated with the customer and been advised on what work needs to be done at this point. The following step is to approve the document lines. There are two methods for authorising the document lines:
1. The first is from the document lines:
   * Scroll to the right on the document until you reach the **Customer Authorised** column. Tick all of the lines that the customer has approved.
   * From the actions bar, select **Process** and then **Copy Authorized Lines to Jobsheet**.

   ![](media/garagehive-trial-processing-a-vehicle-inspection-estimate5.gif)

2. Alternatively, from the group items where the document lines have been added:
   * Scroll up to the section **Group Items** (see [Grouping document lines](garagehive-group-items-grouping-document-lines.html)), where the groups have already been created.
   * Select the group items that have been approved from the **Customer Authorised** column. When a group is checked, all document lines within that group are approved. A single document line that is already part of a group cannot be separately authorised.
   * From the actions bar, select **Process** and then **Copy Authorized Lines to Jobsheet**.

   ![](media/garagehive-trial-processing-a-vehicle-inspection-estimate6.gif)

> **Note:**
>
> The VIE is marked complete and archived after all the lines are approved, or you could change the VIE status to complete for archiving the unapproved lines.
> ![](media/garagehive-trial-vehicle-inspection-estimate-completed.PNG)


# See Also

[How to setup Checklists](garagehive-checklist-how-to-create.html "How to setup Checklists in Garage Hive") \
[How to perform a Vehicle Inspection](/docs/garagehive-technicians-vehicle-inspections.html "How to perform a Vehicle Inspection") \
[Setting reminder date for deffered work](/docs/garagehive-vhc-reminder-date.html)
