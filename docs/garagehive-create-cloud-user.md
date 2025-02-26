---
layout: docs
title: How to Create and Edit Users in Cloud and Reset Password
---

<a name="top"></a>

# How to Create and Edit Users in Cloud and Reset Password
When creating users in the cloud, you must have the **User Administrator** role assigned to your account. This role grants you the necessary permissions to access the **Microsoft 365 admin centre**, where you can manage user accounts, assign licences, reset passwords, and configure security settings. Without the appropriate administrative privileges, you will be unable to add, modify, or remove users from the organisation's cloud environment.


## In this article
1. [Creating a New User](#creating-a-new-user)
2. [Edit an Existing User](#edit-an-existing-user)
3. [Reset Password for a User](#reset-password-for-a-user)
4. [Import Users to Garage Hive](#import-users-to-garage-hive)

### Creating a New User
1. To log-in to the **Microsoft 365 admin centre**, search for **User Management** in the top right corner.

   ![](media/garagehive-create-cloud-user1.png)

2. Click on **Microsoft 365 Admin Centre** from the menu bar. Only an **Admin** can access this link. 

    ![](media/garagehive-create-cloud-user2.png)

3. The **Microsoft Admin Portal** is opened. Select **Add User**.

   ![](media/garagehive-create-cloud-user3.png)

4. Enter the **Name**, **Display Name** and **Username** of the new user.

   ![](media/garagehive-create-cloud-user4.png)

5. Tick the **Automatically Create a Password** checkbox to generate a password for the user. Select the **Require this user to change their password when they first sign in** checkbox to prompt the user to create a new password upon their first login. To send the user's password to the specified email, tick the **Send password in the email upon completion** checkbox. Once done, click **Next**.

   ![](media/garagehive-create-cloud-user5.png)

6. On the following page, select the user's **Location** and then **Create user without product licence**. This is recommended because the user is only used for authentication in Garage Hive. Click **Next**.

   ![](media/garagehive-create-cloud-user6.png)

7. Enter the **Profile Info** for the user; this is optional and can be skipped.

   ![](media/garagehive-create-cloud-user7.png)

8. If you want to give the user access to the **Admin Centre**, go to **Roles** and then select **Admin center access**. Then, from the list, you can assign the suitable admin access. Give users only the access they need by assigning the least-permissive role; this is optional and can be skipped. Click **Next**.

   ![](media/garagehive-create-cloud-user8.png)

9.  Review the information you've entered on the next page, and if you want to change something, click **Edit** next to it. Click **Finish Adding** to add the new user.

   ![](media/garagehive-create-cloud-user9.png)

10. The user has been added. Share the **User Details** with the user so that they can login. To close the page, click **Close**.

   ![](media/garagehive-create-cloud-user10.png)

[Go back to top](#top)

### Edit an Existing User
To edit an existing user:
1. Log-in to **Microsoft 365 admin centre** using this **[link](http://admin.microsoft.com){:target="_blank"}** (Admin rights needed to access this link), and select **Users** under **Your Organization** section, and click on the user that you want to edit. A pop-up window appears on the right side.

   ![](media/garagehive-edit-cloud-existing-user1.png)

2. Select the option under the section you want to edit from the pop-up window. For example, if you want to change the user **Role**, go to the **Roles** section and select **Manage Roles**.

   ![](media/garagehive-edit-cloud-existing-user2.png)

3. You can do the same for either of the other sections.

[Go back to top](#top)

### Reset Password for a User
To reset a password for a user:
1. Log in to the **Microsoft 365 admin centre** by clicking on this **[link](http://admin.microsoft.com){:target="_blank"}** (Admin rights needed to access this link), and then click on **Reset Password**. Select the user or users whose passwords you want to reset from the pop-up window that appears on the right.

   ![](media/garagehive-reset-password-for-cloud-user1.png)

2. After selecting the users, scroll down and click on **Select** to select the users that you want to reset the password.

   ![](media/garagehive-reset-password-for-cloud-user2.png)

3. Select the **Automatically Create a Password** checkbox to generate a password for the user, the **Require these users to change their password when they first sign in** checkbox to prompt the user to create a new password when they first login, or the **Email the sign-in info to me** checkbox to send the user's sign-in details to your email. Click **Reset Password**.

   ![](media/garagehive-reset-password-for-cloud-user3.png)

4. The passwords will be reset.

[Go back to top](#top)

### Import Users to Garage Hive
After user accounts are created in the **Microsoft 365 admin centre**, there are two ways to import them to Garage Hive:
1. A user account is imported automatically when the user signs in to Garage Hive the first time.

   {% include tip.html title="Note" text="After a user signs in to Garage Hive cloud, you can't delete the user." %}

2. The administrator can import users by following the steps below:
   
    * In the top right corner, choose the ![](media/search_icon.png) icon, enter **Users**, and select the related link.

      ![](media/garagehive-update-users1.png)

    * On the **Users** page select **Home** and choose the **Update Users from Microsoft 365** action.

      ![](media/garagehive-update-users2.png)

    * A prompt will appear asking you to update users from Microsoft 365. Click **Next** and follow the on-screen instructions.

      ![](media/garagehive-update-users3.png)

[Go back to top](#top)
