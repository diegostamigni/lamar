import{o as n,c as s,a,d as t,e as p,b as e}from"./app.80913d4a.js";const o='{"title":"Decorators","description":"","frontmatter":{},"relativePath":"guide/ioc/decorators.md","lastUpdated":1629293772464}',c={},i=t("h1",{id:"decorators"},[t("a",{class:"header-anchor",href:"#decorators","aria-hidden":"true"},"#"),p(" Decorators")],-1),l=t("p",null,[p("For version 1.0, Lamar's only support for interception is decorators. If you look in the Lamar codebase, you'll find dozens of tests that use a fake type named "),t("code",null,"IWidget"),p(":")],-1),u=e('<p><a id="snippet-sample_iwidget"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IWidget</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing.Widget/IWidget.cs#L7-L12" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_iwidget" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Let&#39;s say that we have service registrations in our system for that <code>IWidget</code> interface, but we want each of them to be decorated by another form of <code>IWidget</code> like this:</p>',4),r=e('<p><a id="snippet-sample_widgetholder-decorator"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WidgetDecorator</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IWidget</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">WidgetDecorator</span><span class="token punctuation">(</span><span class="token class-name">IThing</span> thing<span class="token punctuation">,</span> <span class="token class-name">IWidget</span> inner<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Inner <span class="token operator">=</span> inner<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">IWidget</span> Inner <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/decorators.cs#L234-L249" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_widgetholder-decorator" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>We can configure Lamar to add a decorator around all other <code>IWidget</code> registrations with this syntax:</p>',4),k=e('<p><a id="snippet-sample_decorator-sample"></a></p><div class="language-cs"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Container</span><span class="token punctuation">(</span>_ <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// This usage adds the WidgetHolder as a decorator</span>\n    <span class="token comment">// on all IWidget registrations</span>\n    _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DecorateAllWith</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>WidgetDecorator<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token comment">// The AWidget type will be decorated w/ </span>\n    <span class="token comment">// WidgetHolder when you resolve it from the container</span>\n    _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    _<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IThing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Thing<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Just proving that it actually works;)</span>\ncontainer<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>WidgetDecorator<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span>Inner<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ShouldBeOfType</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AWidget<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/Lamar.Testing/IoC/Acceptance/decorators.cs#L17-L36" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_decorator-sample" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p>',3);c.render=function(t,p,e,o,c,d){return n(),s("div",null,[i,l,a(" snippet: sample_IWidget "),u,a(" snippet: sample_WidgetHolder-Decorator "),r,a(" snippet: sample_decorator-sample "),k])};export{o as __pageData,c as default};
