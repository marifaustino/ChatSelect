/**
 * Fixed classification fallback from BRIEFING_CLAUDE_CODE.md section 3.
 * The ingestion script auto-detects "ad-hoc" by scanning instrument fields,
 * then cross-checks the result against this list and warns on any mismatch
 * (source of truth may drift as new instruments are added).
 */
export const KNOWN_ADAPTED_SHEET_NAMES = [
  "CEQ-28",
  "CSQ-3",
  "CUQ",
  "SUS",
  "MREQ",
  "CUS",
  "UEQ",
  "UEQ-S",
  "OSLQ",
  "CHISM",
  "Feedback_Quality_Rubric",
  "CSAT",
  "HLS",
  "LMS",
  "MEEGA+",
  "METI",
  "NES",
  "NPS",
  "ECM_KM_AlSharafi_ChatGPT",
  "ECM_Bhattacherjee_ChatGPT",
  "BigTwo_Abele_Bruckmuller",
  "SPS",
  "Task_Resolution_Rubric",
  "TAM_Davis",
  "UES",
  "LRSS_WorkValues",
  "WFC_SES_WorkStudy",
] as const;

export const KNOWN_AD_HOC_SHEET_NAMES = [
  "Attitude_Survey",
  "Conversation_Based_Survey",
  "Evaluation_Questionnaire",
  "Exit_Perception_Questionnaire",
  "GCTM_Questionnaire",
  "Heuristic_Set_Chatbots",
  "Perception_Engagement_Quest",
  "Feedback_Questionnaire_SAM",
  "Perceptions_Quest_ChatGPT_Med",
  "Eval_Quest_Fuzzy_Chatbot",
  "Tech_Acceptance_Questionnaire",
  "SemiStructInterview_SDT",
  "UXQ_AdHoc_Tzitziou",
  "User_Perception_Quest",
] as const;
