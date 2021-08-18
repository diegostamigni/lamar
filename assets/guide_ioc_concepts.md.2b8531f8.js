import{o as e,c as n,a,b as s}from"./app.80913d4a.js";const t='{"title":"Software Design Concepts","description":"","frontmatter":{},"headers":[{"level":2,"title":"Inversion of Control","slug":"inversion-of-control"},{"level":2,"title":"Dependency Injection","slug":"dependency-injection"},{"level":2,"title":"Service Locator","slug":"service-locator"}],"relativePath":"guide/ioc/concepts.md","lastUpdated":1629293772456}',o={},i=s('<h1 id="software-design-concepts"><a class="header-anchor" href="#software-design-concepts" aria-hidden="true">#</a> Software Design Concepts</h1><h2 id="inversion-of-control"><a class="header-anchor" href="#inversion-of-control" aria-hidden="true">#</a> Inversion of Control</h2><p>Years ago I consulted for a company that had developed a successful software engine for pricing and analyzing potential energy trades. The next step for them was to adapt their pricing engine so that it could be embedded in other software packages or even a simple spreadsheet so that analysts could quickly try out &quot;what if&quot; scenarios before making any kind of deal. The immediate problem this firm had was that their pricing engine was architected such that the pricing engine business logic directly invoked their proprietary database schema and configuration files. The strategic pricing engine logic was effectively useless without all the rest of their system, so forget embedding the logic into spreadsheet logic.</p><p>With the benefit of hindsight, if we were to build an energy trading pricing engine from scratch, we would probably opt to use the software design concept of <em><a href="https://en.wikipedia.org/wiki/Inversion_of_control" target="_blank" rel="noopener noreferrer">Inversion of Control</a></em> such that the actual pricing logic code would be handed all the pricing metadata it needed to perform its work instead of making the pricing logic reach out to get it. In its most general usage, <em>Inversion of Control</em> simply means that a component is given some sort of dependent data or service or configuration instead of that component having to &quot;know&quot; how to fetch or find that resource.</p><p>An IoC container like Lamar uses the <em>Inversion of Control</em> concept to simplify your internal services by freeing them from having to know how to find, build, or clean up their dependencies.</p><h2 id="dependency-injection"><a class="header-anchor" href="#dependency-injection" aria-hidden="true">#</a> Dependency Injection</h2><p><em><a href="https://en.wikipedia.org/wiki/Dependency_injection" target="_blank" rel="noopener noreferrer">Dependency Injection</a></em> is nothing more than pushing dependencies of an object into constructor functions or setter properties instead of that object doing everything for itself. If you are strictly using <em>Dependency Injection</em> to fill the dependencies of your classes, your code should have no coupling to Lamar itself.</p>',7),c=s('<p><a id="snippet-sample_basic-dependency-injection"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IDatabase</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseUser</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Using Constructor Injection</span>\n    <span class="token keyword">public</span> <span class="token function">DatabaseUser</span><span class="token punctuation">(</span><span class="token class-name">IDatabase</span> database<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OtherDatabaseUser</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// Setter Injection</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">IDatabase</span> Database <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/DependencyInjection.cs#L5-L22" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_basic-dependency-injection" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><h2 id="service-locator"><a class="header-anchor" href="#service-locator" aria-hidden="true">#</a> Service Locator</h2><p>Lamar also fills the role of a <em><a href="https://en.wikipedia.org/wiki/Service_locator_pattern" target="_blank" rel="noopener noreferrer">service locator</a></em>. In this usage, your code would directly access Lamar&#39;s <code>Container</code> class to build or resolve services upon demand like this sample:</p>',5),p=s('<p><a id="snippet-sample_basic-service-location"></a></p><div class="language-cs"><pre><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThirdDatabaseUser</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token class-name">IDatabase</span> _database<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">ThirdDatabaseUser</span><span class="token punctuation">(</span><span class="token class-name">IContainer</span> container<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// This is service location</span>\n        _database <span class="token operator">=</span> container<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetInstance</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>IDatabase<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><sup><a href="https://github.com/JasperFx/lamar/blob/master/src/StructureMap.Testing/Examples/DependencyInjection.cs#L24-L36" title="Snippet source file">snippet source</a> | <a href="#snippet-sample_basic-service-location" title="Start of snippet">anchor</a></sup>\x3c!-- endSnippet --\x3e</p><p>Since IoC tools like Lamar have come onto the software scene, many developers have very badly overused the service locator pattern and many other developers have become very vocal in their distaste for service location. The Lamar team simply recommends that you favor Dependency Injection wherever possible, but that <em>some</em> service location in your system where you may need more advanced building options or lazy resolution of services is probably just fine.</p>',4);o.render=function(s,t,o,r,l,d){return e(),n("div",null,[i,a(" snippet: sample_basic-dependency-injection "),c,a(" snippet: sample_basic-service-location "),p])};export{t as __pageData,o as default};
