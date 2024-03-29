---
layout: docs
title: Autodata Labour Time Adjustment
---

<a name="top"></a>

# Autodata Labour Time Adjustment

Autodata Labour Time Adjustment is a feature that ensures that the actual time it takes to complete a job is captured when labour times are pulled from Autodata. The goal is to ensure that the garage does not undercharge for labour hours. Here's how you can change the time:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **Labour Time Adjustment**, and select the related link.

   ![](media/garagehive-autodata-labour-time-adjustment1.gif)

2. Select the group of customers in the **Customer Category Code** field to adjust the labour times when the data is pulled from autodata. If you want to introduce the adjustment to all customers, leave this field blank.
3. In the **Hours From** and **Hours To** fields, you define the range of job hours to which the time adjustment should apply. For example, you could specify that jobs with hours ranging from **0.5** to **3** should receive a 30% increase. To apply to all jobs with any hours, enter a **Zero** in these fields.

   ![](media/garagehive-autodata-labour-time-adjustment2.gif)

4. Set the **Value Type** field to be either **Percent** to increase the labour time by a specific percentage, or **Hours** to increase the labour time by a certain number of hours.
5. Then, in the **Increase Value** field, enter the value of the **Percentage** or **Hours**.

   ![](media/garagehive-autodata-labour-time-adjustment3.gif)

{% include tip.html title="Note" text="Some autodata repair times maybe cached in the system, and to make sure that the changes you make have immediate effect consider using the Clear Autodata Cache. In the Labour Time Adjustment page, click on More Options, Choose Actions and select Clear Autodata Cache." %}

![](media/garagehive-autodata-labour-time-adjustment4.png)


[Go back to top](#top)

<br>

### **See Also**

[Viewing and adding servicing intervals data](garagehive-autodata-viewing-and-adding-servicing-intervals.html){:target="_blank"} \
[Adding repair times](garagehive-autodata-adding-repair-times.html){:target="_blank"} \
[Checking vehicle lubricant's data](garagehive-autodata-checking-vehicle-lubricant-data.html){:target="_blank"} \
[Checking vehicle engine oil data](garagehive-autodata-viewing-vehicle-engine-oil-data.html){:target="_blank"} \
[Checking and adding servicing intervals and repair times using engine code](garagehive-autodata-checking-servicing-intervals-and-adding-repair-times-using-engine-code.html){:target="_blank"} \
[How to use timing belt intervals](garagehive-timing-belt-intervals-how-to-use-timing-belt-intervals.html){:target="_blank"} \
[Autodata Seamless Integration](garagehive-autodata-seamless-integration.html){:target="_blank"} \
[Viewing the Tyre Pressure Monitoring System (TPMS) Test](garagehive-autodata-tpms.html){:target="_blank"} \
[Viewing the Service Indicator Reset Data](garagehive-autodata-service-indicators.html)
