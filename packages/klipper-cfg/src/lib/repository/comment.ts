import { TMGrammarScope } from "@vscode-devkit/grammar";

export const comment: TMGrammarScope = {
	name: "comment.line.klipper-cfg",
	begin: /[#;]/,
	beginCaptures: {
		0: { name: "punctuation.definition.begin.comment.line.klipper-cfg" },
	},
	end: /(?=[\r\n])/,
};
