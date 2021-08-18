import{o as n,c as s,a,d as t,e,b as o}from"./app.80913d4a.js";const p='{"title":"Registering Existing Objects","description":"","frontmatter":{},"relativePath":"guide/ioc/registration/existing-objects.md","lastUpdated":1629293772519}',c={},i=t("h1",{id:"registering-existing-objects"},[t("a",{class:"header-anchor",href:"#registering-existing-objects","aria-hidden":"true"},"#"),e(" Registering Existing Objects")],-1),l=t("p",null,[e("It's frequently common to register existing objects with a Lamar "),t("code",null,"Container"),e(" and there are overloads of the "),t("code",null,"ServiceRegistry.For().Use(object)"),e(" and "),t("code",null,"ServiceRegistry.For().Add(object)"),e(" methods to do just that:")],-1),u=o('<p><a id="snippet-sample_injecting-pre-built-object"></a></p><div class="language-cs"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Fact</span></span><span class="token punctuation">]</span>\n<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">should_be_able_to_resolve_from_the_generic_family_expression</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> widget <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">AWidget</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> x<span class="token punctuation">.</span><span class="token function">For</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">IWidget</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Use</span><span class="token punctuation">(</span>widget<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Named</span><span class="token punctuation">(</span><span class="token string">&quot;mine&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;mine&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShouldBeTheSameAs</span><span class="token punctuation">(</span>widget<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Bugs/AddValueDirectlyWithGenericUsage.cs#L8-L18" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_injecting-pre-built-object" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Injecting an existing object into the <code>Container</code> makes it a de facto singleton, but the <code>Container</code> treats it with a special scope called <code>ObjectLifecycle</code> if you happen to look into the <a href="/guide/ioc/diagnostics/what-do-i-have.html">WhatDoIHave()</a> diagnostics.</p><p>Lamar will attempt to call the <code>IDisposable.Dispose()</code> on any objects that are directly injected into a <code>Container</code> that implement <code>IDisposable</code> when the <code>Container</code> itself is disposed.</p>',5);c.render=function(t,e,o,p,c,r){return n(),s("div",null,[i,l,a(" snippet: sample_injecting-pre-built-object "),u])};export{p as __pageData,c as default};
