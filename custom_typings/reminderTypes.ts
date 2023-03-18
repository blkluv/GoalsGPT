export interface Reminder {
  reminder: string;
  complete: boolean;
}

export interface ReminderWithID {
  reminder: Reminder;
  id: string;
}

export interface ModifyReminder {
  reminderID: string;
  complete: boolean;
}

export interface ReminderHistory {
  reminderHistory: Array<ReminderWithID>;
}
