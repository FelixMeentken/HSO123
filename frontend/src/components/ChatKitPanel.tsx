import { useMemo } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { createClientSecretFetcher, workflowId } from "../lib/chatkitSession";

export function ChatKitPanel() {
  const getClientSecret = useMemo(
    () => createClientSecretFetcher(workflowId),
    []
  );

  const chatkit = useChatKit({
    api: { getClientSecret },
      startScreen: {
    greeting: "Willkommen beim HSO Customer Service Agent",
    prompts: [
      { label: "Rücksendung", prompt: "Meine CustomerID ist nnnn und ich möchte mein Produkt zurücksenden" },
      { label: "Test1", prompt: "Test123" },
    ],
  },
  });

  return (
    <div className="flex h-[90vh] w-full rounded-2xl bg-white shadow-sm transition-colors dark:bg-slate-900">
      <ChatKit control={chatkit.control} className="h-full w-full" />
    </div>
  );
}
