import{o as e,c as n,a as t,b as a}from"./app.80913d4a.js";const s='{"title":"Environment Tests","description":"","frontmatter":{},"relativePath":"guide/ioc/diagnostics/environment-tests.md","lastUpdated":1629293772490}',o={},i=a('<h1 id="environment-tests"><a class="header-anchor" href="#environment-tests" aria-hidden="true">#</a> Environment Tests</h1><p>Years ago I worked with a legacy system that was particularly fragile in its deployment. While my team at the time and I made some serious improvements in the reliability of the automated deployment, the best thing we did was to add a set of <em>environment tests</em> to the deployment that verified that basic elements of the system were working like:</p><ul><li>Could our code access the configured database?</li><li>Was a certain COM object registered on the server? (I hated COM then and the years haven&#39;t changed my mind)</li><li>Could we connect via remoting to another deployed application?</li></ul><p>The deployments still frequently failed, but we were able to spot <strong>and diagnose</strong> the underlying problems much faster with our new environment tests than we could before by trying to run and debug the not-quite-valid application.</p><p>One of the mechanisms we used for these environment tests was Lamar&#39;s ability to mark methods on configured types as environment tests with the <code>[ValidationMethod]</code> attribute as shown below:</p>',5),p=a('<p><a id="snippet-sample_validation-method-usage"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Database</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IDatabase</span></span>\n<span class="token punctuation">{</span>\n    <span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">ValidationMethod</span></span><span class="token punctuation">]</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">TryToConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// try to open a connection to the configured</span>\n        <span class="token comment">// database connection string</span>\n\n        <span class="token comment">// throw an exception if the database cannot</span>\n        <span class="token comment">// be reached</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/ValidationMethod.cs#L12-L25" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_validation-method-usage" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Used in conjunction with <a href="/guide/ioc/diagnostics/validating-container-configuration.html">Lamar&#39;s ability to validate a container</a>, you can use this technique to quickly support environment tests embedded into your system code.</p>',4);o.render=function(a,s,o,c,l,r){return e(),n("div",null,[i,t(" snippet: sample_validation-method-usage "),p])};export{s as __pageData,o as default};
