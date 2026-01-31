<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function getNotifications()
    {
        $notifications = Notification::orderBy("created_at", "desc")->get();
        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function markAsRead()
    {
        Notification::where("status", "unread")->update([
            'status' => 'read'
        ]);

        return response()->json([
            'status' => 'success'
        ]);
    }

    public function checkNotification()
    {
        $notificationStatus = Notification::where("status", "unread")->first();
        if($notificationStatus)
            return response()->json([
                'status' => true
            ]);

        return false;
    }
}
