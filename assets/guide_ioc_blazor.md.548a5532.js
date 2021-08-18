import{o as n,c as s,b as a}from"./app.80913d4a.js";const t='{"title":"Integration with Blazor","description":"","frontmatter":{},"relativePath":"guide/ioc/blazor.md","lastUpdated":1629293772456}',p={},o=a('<h1 id="integration-with-blazor"><a class="header-anchor" href="#integration-with-blazor" aria-hidden="true">#</a> Integration with Blazor</h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>No specific Blazor support has been built into Lamar, and Blazor is still an immature and rapidly-evolving framework. Use of Lamar within Blazor apps is considered experimental.</p></div><p>To use Lamar within Blazor applications, you need only the base <a href="https://www.nuget.org/packages/Lamar/" target="_blank" rel="noopener noreferrer">Lamar</a> NuGet package installed. Then, you can configure Blazor&#39;s host builder to use Lamar for IoC as shown below.</p><div class="language-csharp"><pre><code><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading<span class="token punctuation">.</span>Tasks</span><span class="token punctuation">;</span>\n<span class="token keyword">using</span> <span class="token namespace">Lamar</span><span class="token punctuation">;</span>\n<span class="token keyword">using</span> <span class="token namespace">Microsoft<span class="token punctuation">.</span>AspNetCore<span class="token punctuation">.</span>Components<span class="token punctuation">.</span>WebAssembly<span class="token punctuation">.</span>Hosting</span><span class="token punctuation">;</span>\n\n<span class="token keyword">namespace</span> <span class="token namespace">Lamar<span class="token punctuation">.</span>Sample<span class="token punctuation">.</span>Blazor</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Program</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> WebAssemblyHostBuilder<span class="token punctuation">.</span><span class="token function">CreateDefault</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            builder<span class="token punctuation">.</span>RootComponents<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Add</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>App<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token comment">// configure Blazor to use Lamar</span>\n            builder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ConfigureContainer</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ServiceRegistry<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">LamarServiceProviderFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ConfigureServices<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RunAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">ConfigureServices</span><span class="token punctuation">(</span><span class="token class-name">ServiceRegistry</span> services<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// here you can configure Lamar as normal</span>\n\n            services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">For</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IFoo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Use</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Foo<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            services<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">IncludeRegistry</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FooRegistry<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>That&#39;s all you need; Blazor will now use Lamar for all dependency injection.</p>',5);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export{t as __pageData,p as default};
