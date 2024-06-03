---
layout: docs
title: How to Create Users, Manage Roles and Enable Data Permissions in Garage Hive
---

<a name="top"></a>

# How to Create Users, Manage Roles and Enable Data Permissions in Garage Hive
In the Garage Hive system, the **User Management** page allows creation of licenced users, management of their roles, and enabling of data permissions. The only user who can create users, manage roles, and enable data permissions for users is the one who is marked as the **System Administrator**.

## In this article
1. [Checking GH Entitlements Available In the System](#checking-gh-entitlements-available-in-the-system)
2. [Adding and Removing a User Licence](#adding-and-removing-a-user-licence)
3. [Creating a Service Advisor user](#creating-a-service-advisor-user)
4. [Creating a Technician user](#creating-a-technician-user)
5. [Enabling and disabling a user](#enabling-and-disabling-the-user)
6. [Password reset for garage hive user](#password-reset-for-garage-hive-user)
7. [Enabling Data Permissions for a User](#enabling-data-permissions-for-a-user)
8. [Add Authentication Email with Azure Active Directory &#40;AAD&#41;](#add-authentication-email-with-azure-active-directory-aad)
9. [How to Filter Out Service Advisor Tiles For a User](#how-to-filter-out-service-advisor-tiles-for-a-user)

### Checking GH Entitlements Available In the System
To check the available and assigned GH Entitlements in your system:
1. Search for **User Management** in the ![](media/search_icon.png) icon, at the top-right corner.

   ![](media/garagehive-user-management-check-licences1.png)

2. In the top right corner, you'll find an information icon (ℹ️). Click on it.

   ![](media/garagehive-user-management-check-licences2.png)

3. This action will open a new sidebar on the right side of the screen, where the total number of GH Entitlements currently available or assigned in your system can be viewed.

   ![](media/garagehive-user-management-check-licences3.png)

[Go back to top](#top)

### Adding and Removing a User Licence
To be able to use user accounts in the Garage Hive system, they must have a licence. The addition or removal of licences is handled by the Garage Hive support team. So, to initiate the process of adding or removing licence:
1. Search for **User Management** in the ![](media/search_icon.png) icon, at the top-right corner.
2. From the menu bar, select **Add/Remove User Licences**.

    ![](media/garagehive-user-management-add-licence1.png)

3. Enter the number of licences to be added, as shown in the image below, and then click **OK**.

    ![](media/garagehive-user-management-add-licence2.png)

4. You will receive a notification with the following message:

   **'Your request was submitted to Garage Hive support. You should receive a confirmation email immediately. Please note that processing Microsoft licences can take up to 48 hours.'**

   {% include tip.html title="Note" text="If you did not receive the automated email confirmation, please contact the support team as they may not have received the request." %}

[Go back to top](#top)

### Creating a Service Advisor User
To create a Service Advisor Role:
1. Search for **User Management** in the ![](media/search_icon.png) icon, at the top-right corner.

   ![](media/garagehive-user-management1a.png)

2. The **User Management** page displays all the users, their roles, statuses, and GH Entitlements assigned.

    ![](media/garagehive-user-management1.png)

3. To create a new **Service Advisor** user, click on **Create User** from the menu bar and enter the user Full Name in the pop-up window. 
4. The system generates a username and password for the user.
5. Select, the **user Role** as **Service Advisor**, which will have the **GH Entitlement** as the **GH Full User**. Click **Next**.

   ![](media/garagehive-user-management1b.png)

6. Enter the user **Contact Details** and notification settings for the user. Click **Next**.

   ![](media/garagehive-user-management2.png)

7. Specify the clocking preference for the user. Click **Next**.

   ![](media/garagehive-user-management3.png)

8. The following page allow you to add the **Salesperson Code** or use an existing salesperson. Click **Next**.

   ![](media/garagehive-user-management4.png)

9. Choose whether to send a welcome email. Click **Create**.

   ![](media/garagehive-user-management5.png)

10. An email is sent to the new user with the login details, and they can now sign in.

![](media/garagehive-user-management6.png)

[Go back to top](#top)

### Creating a Technician User
To create a **Technician** user:
1. Click on **Create** from the menu bar and enter the user full name.
2. The system generates a username and password for the user.
3. Select, the **user Role** as **Technician**, which will have the **GH Entitlement** as the **GH Lite User**. Click **Next**.

    ![](media/garagehive-user-management7.png)

4. Enter the user **Contact Details** and notification settings for the user. Click **Next**.

   ![](media/garagehive-user-management8.png)

5. Select **Will be using Easy Clocking** and add the **Schedule Resource Group Code** that the technician will be using. The **Resource No.** is automatically generated. Click **Next**.

   ![](media/garagehive-user-management9.png)

6. No salesperson is required on the following pages, click **Next**.
7. Select **Send Welcome Email** to the technician. Click **Create**.

    ![](media/garagehive-user-management10.png)

8. After creating the technician user, check the schedule to ensure the technician is added.

![](media/garagehive-user-management9.gif)

[Go back to top](#top)

### Enabling and Disabling the User
To enable or disable the user:
1. Click on **Enable** or **Disable** from the menu bar.

![](media/garagehive-user-management10.gif)

[Go back to top](#top)

### Password Reset for Garage Hive User
To reset a garage hive user's password:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **User Management**, and choose the related link.
2. Select the user you want to reset the password, choose **Manage** from the menu bar, and click **Edit**.

   ![](media/garagehive-user-management11.png)

3. Click on **Reset Password** action, and then **OK**.

   ![](media/garagehive-user-management12.gif)

4. The user will receive an email with the new password and a link to login. When the user logs in, they will be prompted to change the password to a new password. The **Old Password** should be the password received via email, and the **New Password** should be the user coming up with it, and **Confirm Password**.

   ![](media/garagehive-user-management13.png)

> The password entered must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character. It must not have a sequence of 3 or more ascending, descending or repeating characters.

{% include tip.html title="Note" text="All users created in the system need a licence; talk to our support team to activate your licences." %}

[Go back to top](#top)

### Enabling Data Permissions for a User
To manage **Data Permissions** for a user:
1. In the top-right corner, choose the ![](media/search_icon.png) icon, enter **User Management**, and choose the related link.

   ![](media/garagehive-user-management14.png)

2. Select the user for which you want to enable data Permissions and scroll down to the **Data Permissions** FastTab in the user card.

   ![](media/garagehive-user-management15.png)

3. You can enable the following **Data Permissions** for a user:
      * **Change Accountancy Setup** - If a user's **Change Accountancy Setup** slider is enabled, they can change:
         - General Ledger Setup
         - General Posting Setup
         - VAT Posting Setup
         - Inventory Posting Setup
         - Gen. Business Posting Group
         - Gen. Product Posting Group
         - VAT Business Posting Group
         - VAT Product Posting Group
         - Customer Posting Group
         - Vendor Posting Group
         - Inventory Posting Group
   * **Change Customer Credit Limit** - When this is enabled, the user can change the **Credit Limit** field in the Customer Card, which is located under the **General** FastTab.
         
      ![](media/garagehive-user-management16.png)

   * **Change Customer Blocked** - When this is enabled, the user can block or unblock the Customer Card in the **General** FastTab of the Customer Card.
      
      ![](media/garagehive-user-management17.png)

   * **Change Customer Payment Terms** - When this is enabled, the user can add or remove the **Customer Payment Terms** from the Customer Card under the **Payments** FastTab or from the Jobsheet under the **Invoicing** FastTab.

      ![](media/garagehive-user-management18.png)
      
      or 

      ![](media/garagehive-user-management19.png)

    * **Post Item Journals** - When this is enabled, the user can post the following journals in the system:
         - **Item Journals** - used to adjust the available quantity of an item in the system.

            ![](media/garagehive-post-item-journals1.png)

         - **Physical Inventory Journals** - Used after a physical stock take to adjust the item quantities in the system to match the physically available inventory.

            ![](media/garagehive-post-item-journals2.png)

         - **Item Reclassification Journals** - Used to change Location Code, or Branch Code for item quantities in the system.

            ![](media/garagehive-post-item-journals3.png)

         - **Item Revaluation Journals** - Used to adjust the value of items in the inventory without affecting their quantity.

            ![](media/garagehive-post-item-journals4.png)

[Go back to top](#top)

### Add Authentication Email with Azure Active Directory (AAD)
To add an authentication email, first create a user in the Azure Active Directory Admin Portal, [learn more](garagehive-azure-active-directory-user.html){:target="_blank"}. After creating the user, add the **Email** as follows:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **User Management**, and select the related link.

   ![](media/garagehive-azure-active-directory-authentication1.png)

2. Select the user to add the **Authentication Email**, and enter the email in the **Authentication Email** field.

   ![](media/garagehive-azure-active-directory-authentication2.png)

### How to Filter Out Service Advisor Tiles For a User
If you want a specific user to only see the tiles they have created in the Role Centre, you can enable that in the system for the user; this means that if they only created 4 Jobsheets and there are a total of 12 Jobsheets created, they will only see the 4 Jobsheets they have created in their Role Centre tiles. To enable this for a user:
1. In the top right corner, choose the ![](media/search_icon.png) icon, enter **User Management**, and select the related link.

   ![](media/garagehive-filter-service-advisor-tiles1.png)

2. Select the user for that you want to enable Service Advisor tile filtering and scroll down to **Other** FastTab. To filter **Service Advisor Tiles (Jobsheets and Estimates),** use the **Filter Service Advisor Tiles** slider; to filter only the **Vehicle Inspection (VI) Tiles**, use the **Filter Service Advisor VI Tiles** slider.

   ![](media/garagehive-filter-service-advisor-tiles2.png)
   

[Go back to top](#top)

### **See Also**

[Video: How to manage system users within Garage Hive](https://www.youtube.com/watch?v=Icq0D8j4HIc){:target="_blank"} \
[How to Create and Edit Users in Azure Active Directory (AAD) and Reset Password](garagehive-azure-active-directory-user.html){:target="_blank"} \
[How to Manage GH Entitlements](garagehive-gh-entitlements.html){:target="_blank"}