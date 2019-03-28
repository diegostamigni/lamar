﻿using System.Collections.Generic;
using LamarCodeGeneration;
using LamarCodeGeneration.Frames;
using LamarCodeGeneration.Model;
using Xunit;

namespace Lamar.Testing.Bugs
{
    public class Bug_27_Returning_Created_Variable_From_FindVariables
    {
        [Fact]
        public void do_not_do_a_stackoverflow_here()
        {
            var assembly = new GeneratedAssembly(new GenerationRules("Jasper.Generated"));
            var type = assembly.AddType("MyGuy", typeof(IHandler));
            var method = type.MethodFor("Go");
            
            method.Frames.Add(new CustomFrame());
            method.Frames.Add(new CustomFrame());
            method.Frames.Add(new CustomFrame());
            
            assembly.CompileAll();
        }
    }

    public class CustomFrame : SyncFrame
    {
        public CustomFrame()
        {
            Variable = new Variable(typeof(bool), this);
        }
        
        public Variable Variable { get; }

        public override void GenerateCode(GeneratedMethod method, ISourceWriter writer)
        {
            // nothing
        }

        public override IEnumerable<Variable> FindVariables(IMethodVariables chain)
        {
            yield return Variable;
        }
    }
    
    public interface IHandler
    {
        void Go();
    }
}