/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import { workspace, ExtensionContext } from 'vscode';
import path = require('path');

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	console.log('Lave Language Support extension is now active.');

	// The server is the executable we built in the 'server' folder.
	const serverModule = context.asAbsolutePath(path.join('server', 'testlsp.exe'));

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { command: serverModule },
		debug: { command: serverModule },
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for lave documents
		documentSelector: [{ scheme: 'file', language: 'lave' }],
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'laveLanguageSupport',
		'Lave Language Support',
		serverOptions,
		clientOptions,
	);

	// Start the client. This will also launch the server
	client.start();
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
