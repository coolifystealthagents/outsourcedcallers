import { post as filipino_caller_queue_release_notes, detail as filipino_caller_queue_release_notes_detail } from './aug19-blog/filipino-caller-queue-release-notes';
import { post as appointment_setting_precall_research_boundary, detail as appointment_setting_precall_research_boundary_detail } from './aug19-blog/appointment-setting-precall-research-boundary';
import { post as lead_qualification_problem_statement_capture, detail as lead_qualification_problem_statement_capture_detail } from './aug19-blog/lead-qualification-problem-statement-capture';
import { post as inbound_call_message_completeness_check, detail as inbound_call_message_completeness_check_detail } from './aug19-blog/inbound-call-message-completeness-check';
import { post as customer_follow_up_next_action_ownership, detail as customer_follow_up_next_action_ownership_detail } from './aug19-blog/customer-follow-up-next-action-ownership';
import { post as outbound_calling_list_hygiene_before_retry, detail as outbound_calling_list_hygiene_before_retry_detail } from './aug19-blog/outbound-calling-list-hygiene-before-retry';
import { post as filipino_caller_brief_change_handoff, detail as filipino_caller_brief_change_handoff_detail } from './aug19-blog/filipino-caller-brief-change-handoff';
import { post as appointment_setting_calendar_context_note, detail as appointment_setting_calendar_context_note_detail } from './aug19-blog/appointment-setting-calendar-context-note';
import { post as customer_follow_up_preferred_channel_record, detail as customer_follow_up_preferred_channel_record_detail } from './aug19-blog/customer-follow-up-preferred-channel-record';
import { post as order_confirmation_item_quantity_readback, detail as order_confirmation_item_quantity_readback_detail } from './aug19-blog/order-confirmation-item-quantity-readback';
import { post as database_verification_field_source_trace, detail as database_verification_field_source_trace_detail } from './aug19-blog/database-verification-field-source-trace';
import { post as renewal_reminder_contact_window_note, detail as renewal_reminder_contact_window_note_detail } from './aug19-blog/renewal-reminder-contact-window-note';
import { post as win_back_call_reason_categorization, detail as win_back_call_reason_categorization_detail } from './aug19-blog/win-back-call-reason-categorization';
import { post as survey_caller_neutral_probe_sequence, detail as survey_caller_neutral_probe_sequence_detail } from './aug19-blog/survey-caller-neutral-probe-sequence';
import { post as reception_overflow_transfer_context_card, detail as reception_overflow_transfer_context_card_detail } from './aug19-blog/reception-overflow-transfer-context-card';
import { post as outbound_calling_optout_scope_confirmation, detail as outbound_calling_optout_scope_confirmation_detail } from './aug19-blog/outbound-calling-optout-scope-confirmation';
import { post as filipino_caller_stale_record_pause, detail as filipino_caller_stale_record_pause_detail } from './aug19-blog/filipino-caller-stale-record-pause';
import { post as appointment_setting_reschedule_constraint_note, detail as appointment_setting_reschedule_constraint_note_detail } from './aug19-blog/appointment-setting-reschedule-constraint-note';
import { post as inbound_call_language_support_handoff, detail as inbound_call_language_support_handoff_detail } from './aug19-blog/inbound-call-language-support-handoff';
import { post as call_quality_evidence_linked_score, detail as call_quality_evidence_linked_score_detail } from './aug19-blog/call-quality-evidence-linked-score';
import { post as daily_calling_exception_ledger, detail as daily_calling_exception_ledger_detail } from './aug19-blog/daily-calling-exception-ledger';
import { post as outsourced_caller_escalation_ladder, detail as outsourced_caller_escalation_ladder_detail } from './aug19-blog/outsourced-caller-escalation-ladder';

export const aug19SourceRepair4BlogPosts = [
  filipino_caller_queue_release_notes,
  appointment_setting_precall_research_boundary,
  lead_qualification_problem_statement_capture,
  inbound_call_message_completeness_check,
  customer_follow_up_next_action_ownership,
  outbound_calling_list_hygiene_before_retry,
  filipino_caller_brief_change_handoff,
  appointment_setting_calendar_context_note,
  customer_follow_up_preferred_channel_record,
  order_confirmation_item_quantity_readback,
  database_verification_field_source_trace,
  renewal_reminder_contact_window_note,
  win_back_call_reason_categorization,
  survey_caller_neutral_probe_sequence,
  reception_overflow_transfer_context_card,
  outbound_calling_optout_scope_confirmation,
  filipino_caller_stale_record_pause,
  appointment_setting_reschedule_constraint_note,
  inbound_call_language_support_handoff,
  call_quality_evidence_linked_score,
  daily_calling_exception_ledger,
  outsourced_caller_escalation_ladder,
] as const;
export const aug19SourceRepair4Details = {
  'filipino-caller-queue-release-notes': filipino_caller_queue_release_notes_detail,
  'appointment-setting-precall-research-boundary': appointment_setting_precall_research_boundary_detail,
  'lead-qualification-problem-statement-capture': lead_qualification_problem_statement_capture_detail,
  'inbound-call-message-completeness-check': inbound_call_message_completeness_check_detail,
  'customer-follow-up-next-action-ownership': customer_follow_up_next_action_ownership_detail,
  'outbound-calling-list-hygiene-before-retry': outbound_calling_list_hygiene_before_retry_detail,
  'filipino-caller-brief-change-handoff': filipino_caller_brief_change_handoff_detail,
  'appointment-setting-calendar-context-note': appointment_setting_calendar_context_note_detail,
  'customer-follow-up-preferred-channel-record': customer_follow_up_preferred_channel_record_detail,
  'order-confirmation-item-quantity-readback': order_confirmation_item_quantity_readback_detail,
  'database-verification-field-source-trace': database_verification_field_source_trace_detail,
  'renewal-reminder-contact-window-note': renewal_reminder_contact_window_note_detail,
  'win-back-call-reason-categorization': win_back_call_reason_categorization_detail,
  'survey-caller-neutral-probe-sequence': survey_caller_neutral_probe_sequence_detail,
  'reception-overflow-transfer-context-card': reception_overflow_transfer_context_card_detail,
  'outbound-calling-optout-scope-confirmation': outbound_calling_optout_scope_confirmation_detail,
  'filipino-caller-stale-record-pause': filipino_caller_stale_record_pause_detail,
  'appointment-setting-reschedule-constraint-note': appointment_setting_reschedule_constraint_note_detail,
  'inbound-call-language-support-handoff': inbound_call_language_support_handoff_detail,
  'call-quality-evidence-linked-score': call_quality_evidence_linked_score_detail,
  'daily-calling-exception-ledger': daily_calling_exception_ledger_detail,
  'outsourced-caller-escalation-ladder': outsourced_caller_escalation_ladder_detail,
} as const;
